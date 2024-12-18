import { router } from '@inertiajs/react';
import { debounce } from 'lodash';
import { useCallback, useEffect, useRef, useState } from 'react';

interface UseSearchWithDebounceOptions {
    route: string; // Base route for the resource
    preserveState?: boolean; // Preserve state flag for Inertia
    preserveScroll?: boolean; // Preserve scroll flag for Inertia
    initialSearchTerm?: string;
    waitFor?: number;
}

export function useSearchWithDebounce({
    route,
    preserveState = true,
    preserveScroll = true,
    initialSearchTerm = '',
    waitFor = 600
}: UseSearchWithDebounceOptions) {
    const hasPageBeenRendered = useRef(false);

    // Initialize the search term from the query params, falling back to an empty string if not present
    const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
    const [isLoading, setIsLoading] = useState(false);

    const debouncedSearch = useCallback(
        debounce(() => {
            router.get(
                route,
                {},
                {
                    preserveState,
                    preserveScroll,
                    onStart: () => setIsLoading(true),
                    onFinish: () => setIsLoading(false)
                }
            );
        }, waitFor),
        [route, preserveState, preserveScroll]
    );

    useEffect(() => {
        if (hasPageBeenRendered.current) {
            if (searchTerm.length === 0) {
                router.get(route, {}, { preserveState, preserveScroll });
            } else {
                debouncedSearch();
            }
        }

        hasPageBeenRendered.current = true;

        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm, route, preserveState, preserveScroll, debouncedSearch]);

    return { searchTerm, setSearchTerm, isLoading };
}
