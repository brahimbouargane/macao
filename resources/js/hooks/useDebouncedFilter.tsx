import { QueryBuilder } from '@cgarciagarcia/react-query-builder';
import { router } from '@inertiajs/react';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseFilterWithDebounceOptions {
  builder: QueryBuilder<unknown>;
  targetFilterName: string;
  preserveState?: boolean; // Preserve state flag for Inertia
  preserveScroll?: boolean; // Preserve scroll flag for Inertia
  initialSearchTerm?: string;
  waitFor?: number;
  route: string; // Base route for the resource
}

export function useFilterWithDebounce({
  builder,
  targetFilterName,
  preserveState = true,
  preserveScroll = true,
  initialSearchTerm = '',
  waitFor = 600
}: UseFilterWithDebounceOptions) {
  const hasPageBeenRendered = useRef(false);

  // Initialize the search term from the query params, falling back to an empty string if not present
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  const debouncedSearch = useCallback(
    debounce(() => {
      builder.filter(targetFilterName, searchTerm, true);

      router.get(
        route('users.index') + builder.build(),
        {},
        {
          preserveState,
          preserveScroll
        }
      );
    }, waitFor),
    [route, preserveState, preserveScroll]
  );

  useEffect(() => {
    if (hasPageBeenRendered.current) {
      if (searchTerm.length === 0) {
        router.get(route('users.index') + builder.build(), {}, { preserveState, preserveScroll });
      } else {
        debouncedSearch();
      }
    }

    hasPageBeenRendered.current = true;

    return () => {
      debouncedSearch.cancel();
    };
  }, [searchTerm, route, preserveState, preserveScroll, debouncedSearch]);

  return { searchTerm, setSearchTerm };
}
