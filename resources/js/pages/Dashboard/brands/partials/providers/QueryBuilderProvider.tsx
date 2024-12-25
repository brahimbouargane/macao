import { QueryBuilder } from '@cgarciagarcia/react-query-builder';
import { createContext, ReactNode, useContext } from 'react';
// Import CategoryData from the appropriate file

// Define the context value type
interface QueryBuilderContextType {
  builder: QueryBuilder;
}

// Define the context
const QueryBuilderContext = createContext<QueryBuilderContextType | null>(null);

// Create a provider component
interface QueryBuilderProviderProps {
  builder: QueryBuilder;
  children: ReactNode;
}

export const QueryBuilderProvider = ({ builder, children }: QueryBuilderProviderProps) => {
  if (!builder) {
    throw new Error('QueryBuilderProvider requires a builder instance.');
  }

  return <QueryBuilderContext.Provider value={{ builder }}>{children}</QueryBuilderContext.Provider>;
};

// Create a custom hook to use the builder and optional categories
export const useQueryBuilderBrandsContext = () => {
  const context = useContext(QueryBuilderContext);
  if (!context) {
    throw new Error('useQueryBuilderCategoriesContext must be used within a QueryBuilderProvider.');
  }
  return context;
};
