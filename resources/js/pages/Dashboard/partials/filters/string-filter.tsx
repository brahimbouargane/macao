import { Button, Popover, SearchField, Select } from '@/components/ui';
import { PagePropsData } from '@/types';
import { validStringFilters } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import _, { debounce } from 'lodash';
import { XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

type StringFilterProps = {
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

export default function StringFilter({ fieldName, setAllowedFilters, builder }: StringFilterProps) {
  const translations = usePage<PagePropsData>().props.translations;
  const fieldOperators = [
    { id: 1, suffix: `${fieldName}_ct`, textIndicator: 'Contains', operator: '*' }, // Contains
    { id: 2, suffix: `${fieldName}_nct`, textIndicator: 'Does Not Contain', operator: '!*' }, // Does Not Contain
    { id: 3, suffix: `${fieldName}_sw`, textIndicator: 'Starts With', operator: '^' }, // Starts With
    { id: 4, suffix: `${fieldName}_ew`, textIndicator: 'Ends With', operator: '$' }, // Ends With
    { id: 5, suffix: `${fieldName}_nsw`, textIndicator: 'Does Not Start With', operator: '!^' }, // Does Not Start With
    { id: 6, suffix: `${fieldName}_new`, textIndicator: 'Does Not End With', operator: '!$' }, // Does Not End With
    { id: 7, suffix: `${fieldName}_eq`, textIndicator: 'Equals', operator: '=' }, // Equals
    { id: 8, suffix: `${fieldName}_neq`, textIndicator: 'Does Not Equal', operator: '!=' } // Does Not Equal
  ];
  const [isFetching, setIsFetching] = useState(false);

  router.on('start', () => {
    setIsFetching(true);
  });
  router.on('finish', () => {
    setIsFetching(false);
  });

  let activeFilter = getActiveSuffix(fieldName, fieldOperators);
  const [searchTerm, setSearchTerm] = useState(activeFilter ? activeFilter.value : '');

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
      <div className="flex items-stretch overflow-hidden transition-all rounded-md hover:scale-95 ">
        <Button className="rounded-none h-full   border-none flex items-center !p-0 !py-1 !px-2   focus:outline-none">
          {`${__(translations, _.capitalize(fieldName))} ${searchTerm.length > 0 ? activeFilter?.operator : ''} `}
          <span>{searchTerm}</span>
        </Button>

        <div className="flex items-center px-1 overflow-hidden rounded-none cursor-pointer bg-zinc-200 dark:bg-zinc-500 ">
          <XIcon
            size={14}
            className="transition-all duration-500 hover:rotate-180 hover:text-primary text-[#222] dark:text-inherit "
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
      <Popover.Content showArrow={false} className="border-2 dark:bg-accent border-zinc-300 dark:border-zinc-500">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <FaFilter size={20} />
            <Select
              aria-label="filter options"
              isDisabled={isFetching}
              selectedKey={activeFilter?.id}
              onSelectionChange={function (key) {
                // change the selected  filter operator and update the builder
                let selectedSuffix = fieldOperators.find((ele) => ele.id == key).suffix;
                builder.filter(selectedSuffix, searchTerm, true);
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
            <SearchField
              autoFocus
              name="filter text input"
              placeholder={__(translations, 'Search') + '...'}
              className=" w-full  dark:!border-colors-primary-600 dark:border-[1px] dark:rounded-lg outline-4"
              isPending={isFetching}
              value={searchTerm}
              onChange={(value) => {
                // setSearchTermmmm(value);
                setSearchTerm(value);
                if (value.length == 0) {
                  builder.filter(activeFilter.suffix, value, true);
                } else {
                  debouncedFilter.current(value, activeFilter.suffix);
                }
              }}
              aria-label="Filter field"
              aria-labelledby="Filter field"
            />
          </div>
        </div>
      </Popover.Content>
    </Popover>
  );
}

function getOperator(fieldName: string) {}

function isValidFilter(suspectFilter: string, filedName: string) {
  let isValid = false;
  validStringFilters(filedName).forEach((filter) => {
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
): { value: string; suffix: string; operator: string; id: string } {
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
