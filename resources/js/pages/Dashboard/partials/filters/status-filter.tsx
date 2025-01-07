import { Button, MultipleSelect, Popover, Select } from '@/components/ui';
import { PagePropsData } from '@/types';
import { validStatusFilters } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import { useListData } from '@react-stately/data';
import _, { debounce } from 'lodash';
import { XIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { Key } from 'react-aria';
import { FaFilter } from 'react-icons/fa';
import { FaMagnifyingGlass } from 'react-icons/fa6';

interface SelectOption {
  id: string;
  name: string;
  [key: string]: any; // This allows any additional properties
}

type StatusFilterProps = {
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
  selectOptions: SelectOption[];
};

function replaceViewText(text: string) {
  if (text == 'product_type') {
    return 'Type';
  }

  if (text == 'categories' && window.location.pathname.includes('categories')) {
    return 'Parent categories';
  }

  if (text == 'created_at') {
    return 'Created at';
  }

  if (text == 'last_updated_by') {
    return 'last updated by';
  }

  return text;
}

export default function StatusFilter({ fieldName, setAllowedFilters, builder, selectOptions }: StatusFilterProps) {
  const translations = usePage<PagePropsData>().props.translations;
  const fieldOperators = [
    { id: 1, suffix: `${fieldName}_in`, textIndicator: 'Is In', operator: 'IN' }, // IN
    { id: 2, suffix: `${fieldName}_nin`, textIndicator: 'Is Not In', operator: 'NOT IN' }, // NOT IN
    { id: 3, suffix: `${fieldName}_eq`, textIndicator: 'Equals', operator: '=' }, // Equals
    { id: 4, suffix: `${fieldName}_neq`, textIndicator: 'Does Not Equal', operator: '!=' } // Does Not Equal
  ];
  const [isFetching, setIsFetching] = useState(false);

  router.on('start', () => {
    setIsFetching(true);
  });
  router.on('finish', () => {
    setIsFetching(false);
  });

  let activeFilter = getActiveSuffix(fieldName, fieldOperators);

  const [singularSearchValue, setSingularSearchValue] = useState(() => {
    let itemId =
      activeFilter &&
      activeFilter.value &&
      typeof Number(activeFilter.value) == 'number' &&
      [fieldOperators[2].suffix, fieldOperators[3].suffix].includes(activeFilter.suffix)
        ? activeFilter.value
        : null;

    if (itemId) {
      return selectOptions.find((itm) => itm.id == itemId).id as Key;
    }
  });

  const selectedMultipleSearchValues = useListData<SelectOption>({
    initialItems: getInitialMultipleSelectInitialValues({ activeFilter, selectOptions, fieldOperators })
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
    <>
      <Popover defaultOpen={!activeFilter?.value}>
        <div className="flex items-stretch overflow-hidden transition-all rounded-md hover:scale-95">
          <Button className="rounded-none h-full   border-none flex items-center !p-0 !py-1 !px-2   focus:outline-none">
            {`${__(translations, _.capitalize(replaceViewText(fieldName)))} ${(activeFilter?.operator && __(translations, activeFilter?.operator)) || ''} `}
            <span>
              {(singularSearchValue && selectOptions.find((itm) => itm.id == singularSearchValue)?.name) || ''}
              {selectedMultipleSearchValues.items.length > 0
                ? selectedMultipleSearchValues.items.map((itm) => itm.name).join(', ')
                : ''}
            </span>
          </Button>

          <div className="flex items-center px-1 overflow-hidden rounded-none cursor-pointer bg-zinc-200 dark:bg-zinc-500 ">
            <XIcon
              size={14}
              color="#ccc"
              className="transition-all duration-500 hover:rotate-180 hover:text-primary "
              onClick={() => {
                builder.removeFilter(...validStatusFilters(fieldName));
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
              {/*  SELECT FILTER TYPE */}
              <Select
                aria-label="filter options"
                isDisabled={isFetching}
                selectedKey={activeFilter?.id}
                onSelectionChange={function (key) {
                  // change the selected  filter operator and update the builder
                  let selectedFilter = fieldOperators.find((ele) => ele.id == key);
                  let selectedSuffix = selectedFilter.suffix;
                  if (selectedFilter.id == 3 || selectedFilter.id == 4) {
                    builder.filter(selectedSuffix, singularSearchValue, true);
                    // set the multiple select value to null

                    selectedMultipleSearchValues.remove(...selectedMultipleSearchValues.items.map((itm) => itm.id));
                  } else {
                    builder.filter(
                      selectedSuffix,
                      selectedMultipleSearchValues.items.length > 0
                        ? selectedMultipleSearchValues.items.map((item) => item.id)
                        : '',
                      true
                    );
                    setSingularSearchValue(null);
                  }
                }}
              >
                <Select.Trigger />
                <Select.List items={fieldOperators}>
                  {(item) => (
                    <Select.Option
                      key={item.id}
                      id={item.id}
                      textValue={item.textIndicator}
                      className="hover:text-white"
                    >
                      {__(translations, item.textIndicator)}
                    </Select.Option>
                  )}
                </Select.List>
              </Select>
            </div>

            {/* SELECT FILTER VALUE */}
            <div className="flex items-center gap-x-2">
              <FaMagnifyingGlass size={20} />
              {/* single value search */}
              {(activeFilter?.id == 3 || activeFilter?.id == 4) && (
                <Select
                  autoFocus
                  isDisabled={isFetching}
                  selectedKey={singularSearchValue}
                  onSelectionChange={function (key) {
                    // What will happen when a single value select is selected
                    setSingularSearchValue(key);
                    builder.filter(activeFilter.suffix, key, true);

                    // debouncedFilter.current(selectOptions[Number(key) - 1].id activeFilter.suffix);
                  }}
                  placeholder={__(translations, 'Select an option')}
                  aria-label="Filter field"
                  aria-labelledby="Filter field"
                >
                  <Select.Trigger />
                  <Select.List items={selectOptions}>
                    {(item) => (
                      <Select.Option key={item.id} id={item.id} textValue={item.name}>
                        {item.name}
                      </Select.Option>
                    )}
                  </Select.List>
                </Select>
              )}

              {/* Multiple value search */}
              {(activeFilter?.id == 1 || activeFilter?.id == 2) && (
                <div className="flex items-center w-full">
                  <MultipleSelect
                    autoFocus
                    className="max-w-[330px] w-full"
                    key={selectOptions.length}
                    selectedItems={selectedMultipleSearchValues}
                    items={selectOptions}
                    isDisabled={isFetching}
                    onItemInserted={(key) => {
                      // handle search

                      let selectedItemId = key;
                      let existingItemsIds =
                        selectedMultipleSearchValues.items.length > 0
                          ? selectedMultipleSearchValues.items.map((item) => item.id)
                          : [];
                      console.log('zbi : ', selectedItemId, existingItemsIds);
                      builder.filter(activeFilter.suffix, [...existingItemsIds, selectedItemId].join(','), true);

                      // debouncedFilter.current([...existingItemsIds, selectedItemId].join(','), activeFilter.suffix);
                    }}
                    onItemCleared={(key) => {
                      // handle search
                      let selectedItemId = key;
                      let existingItemsIds =
                        selectedMultipleSearchValues.items.length > 0
                          ? selectedMultipleSearchValues.items
                              .map((item) => item.id)
                              .filter((id) => id != selectedItemId)
                          : [];
                      builder.filter(activeFilter.suffix, [...existingItemsIds].join(','), true);

                      // debouncedFilter.current([...existingItemsIds].join(','), activeFilter.suffix);
                    }}
                    tag={(item) => (
                      <MultipleSelect.Tag key={item.id} textValue={item.name}>
                        {item.name}
                      </MultipleSelect.Tag>
                    )}
                    aria-label="multiple Filter field"
                    aria-labelledby="multiple Filter field"
                  >
                    {(item) => {
                      return (
                        <MultipleSelect.Option key={item.id} id={item.id} textValue={item.name}>
                          {item.name}
                        </MultipleSelect.Option>
                      );
                    }}
                  </MultipleSelect>
                </div>
              )}
            </div>
          </div>
        </Popover.Content>
      </Popover>
    </>
  );
}

function isValidFilter(suspectFilter: string, filedName: string) {
  let isValid = false;
  validStatusFilters(filedName).forEach((filter) => {
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

type getInitialMultipleSelectInitialValuesProps = {
  activeFilter: { value: string; suffix: string; operator: string; id: number };
  selectOptions: SelectOption[];
  fieldOperators: {
    id: number;
    suffix: string;
    textIndicator: string;
    operator: string;
  }[];
};
function getInitialMultipleSelectInitialValues({
  activeFilter,
  selectOptions,
  fieldOperators
}: getInitialMultipleSelectInitialValuesProps): SelectOption[] {
  let queryParamsData =
    activeFilter &&
    activeFilter.value &&
    typeof activeFilter.value == 'string' &&
    [fieldOperators[0].suffix, fieldOperators[1].suffix].includes(activeFilter.suffix)
      ? activeFilter.value
      : null;

  if (queryParamsData) {
    let items = queryParamsData.split(',');

    return selectOptions.filter((itm) => items.includes(String(itm.id)));
  }
  return [];
}
