import { GlobalState, QueryBuilder } from '@cgarciagarcia/react-query-builder';

type MarkFiledAsActiveProps = {
  toggleFilter: (targetField: string) => void;
  state: GlobalState<unknown>;
  filters: string[];
};
export function markFilterAsActive({ state, toggleFilter, filters }: MarkFiledAsActiveProps) {
  if (state.filters.length > 0) {
    state.filters.forEach((element) => {
      filters.forEach((targetFilter) => {
        if (element.attribute.startsWith(targetFilter)) {
          toggleFilter(targetFilter);
        }
      });
    });
  }
}

type AppendFilterToUrlQueryProps = {
  currentFilter: {
    type: string;
    value: string;
    isSelected: boolean;
  };
  builder: QueryBuilder<unknown>;
};

export function appendFilterToUrlQuery({ currentFilter, builder }: AppendFilterToUrlQueryProps) {
  switch (currentFilter.type) {
    case 'string':
      builder.filter(`${currentFilter.value}_ct`, '', true);
      break;
    case 'date':
      builder.filter(`${currentFilter.value}_eq`, '', true);
      break;
    case 'number':
      builder.filter(`${currentFilter.value}_eq`, '', true);
      break;
    case 'status':
      builder.filter(`${currentFilter.value}_eq`, '', true);
      break;
  }
}

export function hideColumn(header: any, role: string) {
  const columnsToBeHidden = ['created_by', 'last_updated_by'];
  if (
    ((header.id as string).includes(columnsToBeHidden[0]) || (header.id as string).includes(columnsToBeHidden[1])) &&
    role != 'admin'
  ) {
    return true;
  }
  return false;
}

type AppendAdminFieldsProps = {
  role: string;

  defaults: {
    type: string;
    value: string;
    isSelected: boolean;
  }[];
};
export function appendAdminFields({ role, defaults }: AppendAdminFieldsProps) {
  if (role == 'admin') {
    defaults.push(
      { type: 'status', value: 'created_by', isSelected: false },
      { type: 'status', value: 'last_updated_by', isSelected: false }
    );
  }

  return defaults;
}
