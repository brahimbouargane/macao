import { Button, Popover, Select, TextField } from '@/components/ui';
import { PagePropsData } from '@/types';
import { validNumberFilters, validStringFilters } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import _, { debounce } from 'lodash';
import { XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type NumberFilterProps = {
  fieldName?: string;
  setAllowedFilters: React.Dispatch<
    React.SetStateAction<
      {
        type: string;
        value: string;
        isSelected: boolean;
      }[]
    >
  >;
  builder: any;
};

export default function NumberFilter({ fieldName, setAllowedFilters, builder }: NumberFilterProps) {
  const translations = usePage<PagePropsData>().props.translations;
  const fieldOperators = [
    { id: 1, suffix: `${fieldName}_eq`, textIndicator: 'Equals', operator: '=' }, // Equals
    { id: 2, suffix: `${fieldName}_neq`, textIndicator: 'Does Not Equal', operator: '!=' }, // Does Not Equal
    { id: 3, suffix: `${fieldName}_gt`, textIndicator: 'Is Greater Than', operator: '>' }, // Greater Than
    { id: 4, suffix: `${fieldName}_gte`, textIndicator: 'Is Greater Than Or Equal To', operator: '>=' }, // Greater Or Equal
    { id: 5, suffix: `${fieldName}_lt`, textIndicator: 'Is Less Than', operator: '<' }, // Less Than
    { id: 6, suffix: `${fieldName}_lte`, textIndicator: 'Is Less Than Or Equal To', operator: '<=' }, // Less Or Equal
    { id: 7, suffix: `${fieldName}_bt`, textIndicator: 'Is Between', operator: '><' }, // Between
    { id: 8, suffix: `${fieldName}_nbt`, textIndicator: 'Is Not Between', operator: '!><' } // Not Between
  ];
  const [isFetching, setIsFetching] = useState(false);

  router.on('start', () => {
    setIsFetching(true);
  });
  router.on('finish', () => {
    setIsFetching(false);
  });

  let activeFilter = getActiveSuffix(fieldName, fieldOperators);
  const [singularSearchValue, setSingularSearchValue] = useState(
    activeFilter && !activeFilter.value.includes('and') ? Number(activeFilter.value) : null
  );
  const [betweenSearchValue, setBetweenSearchValue] = useState(
    activeFilter && activeFilter.value.includes('and')
      ? {
          start: activeFilter.value.split('and')[0],
          end: activeFilter.value.split('and')[1]
        }
      : { start: null, end: null }
  );

  // Debounce logic
  const debouncedFilter = useRef(
    debounce((value, suffix) => {
      builder.filter(suffix, value, true);
    }, 600)
  );

  useEffect(() => {
    return () => {
      debouncedFilter.current.cancel();
    };
  }, []);

  return (
    <Popover defaultOpen={!activeFilter?.value}>
      <div className="flex items-stretch overflow-hidden transition-all rounded-md hover:scale-95">
        <Button className="rounded-none h-full   border-none flex items-center !p-0 !py-1 !px-2   focus:outline-none">
          {`${__(translations, _.capitalize(checkForCustomFilters(fieldName)))} ${activeFilter?.operator || ''} `}
          <span>
            {singularSearchValue || ''}
            {(betweenSearchValue.start || betweenSearchValue.end) &&
              `${betweenSearchValue.start || ''}, ${betweenSearchValue.end || ''}`}
          </span>
        </Button>

        <div className="flex items-center px-1 overflow-hidden rounded-none cursor-pointer bg-zinc-200 dark:bg-zinc-500 ">
          <XIcon
            size={14}
            color="#ccc"
            className="transition-all duration-500 hover:rotate-180 hover:text-primary "
            onClick={() => {
              builder.removeFilter(...validStringFilters(fieldName));
              setAllowedFilters((prev) =>
                prev.map((filter) =>
                  filter.value === fieldName ? { ...filter, isSelected: !filter.isSelected } : filter
                )
              );
            }}
          />
        </div>
      </div>
      <Popover.Content
        showArrow={false}
        className="border-2 min-w-72 dark:bg-accent border-zinc-300 dark:border-zinc-500"
      >
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center gap-x-2">
            <FaFilter size={20} />
            <Select
              aria-label="filter options"
              isDisabled={isFetching}
              selectedKey={activeFilter?.id}
              onSelectionChange={function (key) {
                // change the selected  filter operator and update the builder
                let selectedFilter = fieldOperators.find((ele) => ele.id == key);
                let selectedSuffix = selectedFilter.suffix;
                if (selectedFilter.id == 7 || selectedFilter.id == 8) {
                  builder.filter(
                    selectedSuffix,
                    `${betweenSearchValue.start || ''}and${betweenSearchValue.end || ''}`,
                    true
                  );
                  setSingularSearchValue(null);
                } else {
                  builder.filter(selectedSuffix, singularSearchValue, true);

                  setBetweenSearchValue({ start: null, end: null });
                }
              }}
            >
              <Select.Trigger />
              <Select.List items={fieldOperators}>
                {(item) => (
                  <Select.Option key={item.id} id={item.id} textValue={item.textIndicator} className="hover:text-white">
                    {__(translations, item.textIndicator)}
                  </Select.Option>
                )}
              </Select.List>
            </Select>
          </div>
          <div className="flex items-center gap-x-2">
            <FaMagnifyingGlass size={20} />
            {/* single value search */}
            {activeFilter?.id != 7 && activeFilter?.id != 8 && (
              <TextField
                type="number"
                autoFocus
                name="filter text input"
                placeholder={__(translations, 'Search') + '...'}
                className=" w-full  dark:!border-colors-primary-600 dark:border-[1px] dark:rounded-lg outline-4"
                value={String(singularSearchValue)}
                onChange={(value) => {
                  setSingularSearchValue(Number(value));
                  if (!value) {
                    builder.filter(activeFilter.suffix, value, true);
                  } else {
                    debouncedFilter.current(value, activeFilter.suffix);
                  }
                }}
                aria-label="Filter field"
                aria-labelledby="Filter field"
              />
            )}

            {/* Between value search */}
            {(activeFilter?.id == 7 || activeFilter?.id == 8) && (
              <div className="flex items-center  w-full">
                <TextField
                  type="number"
                  autoFocus
                  name="filter text input"
                  className=" w-full sm:max-w-[100px]  dark:!border-colors-primary-600 dark:border-[1px] dark:rounded-lg outline-4"
                  value={betweenSearchValue.start}
                  onChange={(value) => {
                    setBetweenSearchValue((prev) => ({ ...prev, start: value }));

                    if (!value) {
                      builder.filter(activeFilter.suffix, `${value || ''}and${betweenSearchValue.end || ''}`, true);
                    } else {
                      debouncedFilter.current(`${value || ''}and${betweenSearchValue.end || ''}`, activeFilter.suffix);
                    }
                  }}
                  aria-label="Filter field"
                  aria-labelledby="Filter field"
                />
                <span className="mx-2 text-sm font-semibold text-zinc-500 ">{__(translations, 'and')}</span>
                <TextField
                  type="number"
                  name="filter text input"
                  className=" w-full sm:max-w-[100px]  dark:!border-colors-primary-600 dark:border-[1px] dark:rounded-lg outline-4"
                  value={betweenSearchValue.end}
                  onChange={(value) => {
                    setBetweenSearchValue((prev) => ({ ...prev, end: value }));

                    if (!value) {
                      builder.filter(activeFilter.suffix, `${betweenSearchValue.start || ''}and${value || ''}`, true);
                    } else {
                      debouncedFilter.current(
                        `${betweenSearchValue.start || ''}and${value || ''}`,
                        activeFilter.suffix
                      );
                    }
                  }}
                  aria-label="Filter field"
                  aria-labelledby="Filter field"
                />
              </div>
            )}
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
}

function isValidFilter(suspectFilter: string, filedName: string) {
  let isValid = false;
  validNumberFilters(filedName).forEach((filter) => {
    if (filter == suspectFilter) {
      isValid = true;
    }
  });
  return isValid;
}
function getActiveSuffix(
  fieldName: string,
  fieldOperators: {
    id: number;
    suffix: string;
    textIndicator: string;
    operator: string;
  }[]
): { value: string; suffix: string; operator: string; id: number } {
  let suffix = null;
  if (route().queryParams?.filter) {
    Object.keys(route().queryParams?.filter).forEach((targetFilter) => {
      if (targetFilter.startsWith(fieldName) && isValidFilter(targetFilter, fieldName)) {
        suffix = {
          id: fieldOperators.find((f) => f.suffix == targetFilter).id,
          suffix: targetFilter,
          operator: fieldOperators.find((f) => f.suffix == targetFilter).operator,
          value: route().queryParams?.filter[targetFilter]
        };
      }
    });
  }

  return suffix;
}

function checkForCustomFilters(fieldName: string) {
  const customNumberFilters = ['prod_count'];
  let result = fieldName;
  if (customNumberFilters.includes(fieldName)) {
    switch (fieldName) {
      case 'prod_count':
        result = 'Products count';
        break;
    }
  }

  return result;
}
