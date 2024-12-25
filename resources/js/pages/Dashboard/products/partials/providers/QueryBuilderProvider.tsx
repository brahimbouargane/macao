import { BrandData, CategoryData } from '@/types';
import { QueryBuilder } from '@cgarciagarcia/react-query-builder';
import { createContext, ReactNode, useContext } from 'react';
// Import CategoryData from the appropriate file

// Define the context value type
interface QueryBuilderContextType {
  builder: QueryBuilder;
  categories?: CategoryData[];
  brands?: BrandData[];
}

// Define the context
const QueryBuilderContext = createContext<QueryBuilderContextType | null>(null);

// Create a provider component
interface QueryBuilderProviderProps {
  builder: QueryBuilder;
  categories?: CategoryData[];
  brands?: BrandData[];
  children: ReactNode;
}

export const QueryBuilderProvider = ({ builder, categories, brands, children }: QueryBuilderProviderProps) => {
  if (!builder) {
    throw new Error('QueryBuilderProvider requires a builder instance.');
  }

  return (
    <QueryBuilderContext.Provider value={{ builder, categories, brands }}>{children}</QueryBuilderContext.Provider>
  );
};

// Create a custom hook to use the builder and optional categories
export const useQueryBuilderProductsContext = () => {
  const context = useContext(QueryBuilderContext);
  if (!context) {
    throw new Error('useQueryBuilderCategoriesContext must be used within a QueryBuilderProvider.');
  }
  return context;
};
