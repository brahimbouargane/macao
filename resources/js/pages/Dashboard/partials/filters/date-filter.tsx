import { Button, DatePicker, DateRangePicker, Popover, Select } from '@/components/ui';
import { PagePropsData } from '@/types';
import { validDateFilters } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import { parseDate } from '@internationalized/date';
import _, { debounce } from 'lodash';
import { XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { FaFilter } from 'react-icons/fa';
import { MdOutlineDateRange } from 'react-icons/md';

type DateFilterProps = {
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

export default function DateFilter({ fieldName, setAllowedFilters, builder }: DateFilterProps) {
  const translations = usePage<PagePropsData>().props.translations;
  const fieldOperators = [
    { id: 1, suffix: `${fieldName}_ib`, textIndicator: 'Is Before', operator: '<' }, // Is Less Than
    { id: 2, suffix: `${fieldName}_ia`, textIndicator: 'Is After', operator: '>' }, // Is Greater Than
    { id: 3, suffix: `${fieldName}_eqoib`, textIndicator: 'Equals Or Is Before', operator: '<=' }, // Is Less Than or Equal
    { id: 4, suffix: `${fieldName}_eqoia`, textIndicator: 'Equals Or Is After', operator: '>=' }, // Is Greater Than or Equal
    { id: 5, suffix: `${fieldName}_eq`, textIndicator: 'Equals', operator: '==' }, // Equals
    { id: 6, suffix: `${fieldName}_neq`, textIndicator: 'Does Not Equal', operator: '!=' }, // Does Not Equal
    { id: 7, suffix: `${fieldName}_bt`, textIndicator: 'Is Between', operator: '><' }, // Is Within Range
    { id: 8, suffix: `${fieldName}_nbt`, textIndicator: 'Is Not Between', operator: '!><' }, // Is Not Within Range
    { id: 9, suffix: `${fieldName}_is`, textIndicator: 'Is Set', operator: '!= null' }, // Is Defined
    { id: 10, suffix: `${fieldName}_nis`, textIndicator: 'Is Not Set', operator: '= null' } // Is Not Defined
  ];
  const [isFetching, setIsFetching] = useState(false);

  router.on('start', () => {
    setIsFetching(true);
  });
  router.on('finish', () => {
    setIsFetching(false);
  });

  let activeFilter = getActiveSuffix(fieldName, fieldOperators);

  // Single data state
  const [selectedDate, setSelectedDate] = useState(() => {
    if (activeFilter && activeFilter.value) {
      if (!activeFilter?.value.includes('to')) {
        return parseDate(activeFilter.value);
      } else {
        return null;
      }
    } else {
      return null;
    }
  });

  //  range date state
  const [selectedRangeDate, setSelectedRangeDate] = useState(() => {
    if (activeFilter && activeFilter.value) {
      if (activeFilter?.value.includes('to')) {
        return {
          start: parseDate(activeFilter?.value.split(' to ')[0]),
          end: parseDate(activeFilter?.value.split(' to ')[1])
        };
      } else {
        return null;
      }
    } else {
      return {
        start: null,
        end: null
      };
    }
  });

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
      <div className="flex items-stretch overflow-hidden transition-all border-2 border-primary² rounded-md hover:scale-95">
        <Button className=" rounded-none h-full border-none flex items-center !p-0 !py-1 !px-2   focus:outline-none">
          <span>{`${__(translations, _.capitalize(replaceViewText(fieldName)))}`}</span>
          <span>{`${selectedDate || selectedRangeDate ? activeFilter?.operator || '' : ''}`}</span>
          <span>
            {selectedDate?.toString()}
            {selectedRangeDate?.start &&
              `${selectedRangeDate?.start?.toString()} - ${selectedRangeDate?.end?.toString()}`}
          </span>
        </Button>

        <div className="flex items-center px-1 overflow-hidden rounded-none cursor-pointer bg-zinc-200 dark:bg-zinc-500">
          <XIcon
            size={14}
            className="transition-all duration-500 hover:rotate-180 hover:text-primary text-[#222] dark:text-inherit"
            onClick={() => {
              builder.removeFilter(...validDateFilters(fieldName));
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
        <div className="flex flex-col gap-y-2">
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
                // Single date was picked
                if (
                  selectedFilter.id != 7 &&
                  selectedFilter.id != 8 &&
                  selectedFilter.id != 9 &&
                  selectedFilter.id != 10
                ) {
                  setSelectedRangeDate({
                    start: null,
                    end: null
                  });
                  builder.filter(selectedSuffix, selectedDate?.toString(), true);

                  // Range Date was picked
                } else if (selectedFilter.id == 7 || selectedFilter.id == 8) {
                  setSelectedDate(null);

                  builder.filter(
                    selectedSuffix,
                    selectedRangeDate.start
                      ? `${selectedRangeDate?.start?.toString()} to ${selectedRangeDate?.end?.toString()}`
                      : '',
                    true
                  );
                  // set or not set was picked
                } else if (selectedFilter.id == 9 || selectedFilter.id == 10) {
                  setSelectedDate(null);
                  setSelectedRangeDate({
                    start: null,
                    end: null
                  });
                  builder.filter(selectedSuffix, selectedFilter.id == 9 ? 'notnull' : 'null', true);
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
          {activeFilter?.id != 9 && activeFilter?.id != 10 && activeFilter?.id != 7 && activeFilter?.id != 8 && (
            <div className="flex items-center gap-x-2">
              <MdOutlineDateRange size={20} />

              <DatePicker
                autoFocus
                value={selectedDate}
                onChange={(newValue) => {
                  setSelectedDate(newValue!);
                  // setSelectedRangeDate({
                  //   start: null,
                  //   end: null
                  // });
                  debouncedFilter.current(newValue, activeFilter.suffix);
                }}
                className="w-full"
                aria-label="Filter field"
                aria-labelledby="Filter field"
                isDisabled={isFetching}
              />
            </div>
          )}
          {(activeFilter?.id == 7 || activeFilter?.id == 8) && (
            <div className="flex items-center w-full gap-x-2 ">
              <MdOutlineDateRange size={20} />
              <DateRangePicker
                className="w-full"
                autoFocus
                isDisabled={isFetching}
                value={selectedRangeDate}
                onChange={(newValue) => {
                  setSelectedRangeDate(newValue!);
                  // setSelectedDate(null);

                  debouncedFilter.current(
                    `${newValue?.start?.toString()} to ${newValue?.end?.toString()}`,
                    activeFilter.suffix
                  );
                }}
                aria-label="Range Datte Filter field"
              />
            </div>
          )}
        </div>
      </Popover.Content>
    </Popover>
  );
}

function getOperator(fieldName: string) {}

function isValidFilter(suspectFilter: string, filedName: string) {
  let isValid = false;
  validDateFilters(filedName).forEach((filter) => {
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

function replaceViewText(text: string) {
  if (text == 'product_type') {
    return 'Type';
  }

  if (text == 'created_at') {
    return 'Created at';
  }
  if (text == 'created_by') {
    return 'created by';
  }

  if (text == 'last_updated_by') {
    return 'last updated by';
  }

  return text;
}
