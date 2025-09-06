import { BrandData, CategoryData, ProductTypeData } from '@/types';
import { QueryBuilder } from '@cgarciagarcia/react-query-builder';
import { createContext, ReactNode, useContext } from 'react';
// Import CategoryData from the appropriate file

// Define the context value type
interface QueryBuilderContextType {
  builder: QueryBuilder;
  categories?: CategoryData[];
  brands?: BrandData[];
  productTypes?: ProductTypeData[];
}

// Define the context
const QueryBuilderContext = createContext<QueryBuilderContextType | null>(null);

// Create a provider component
interface QueryBuilderProviderProps {
  builder: QueryBuilder;
  categories?: CategoryData[];
  brands?: BrandData[];
  productTypes?: ProductTypeData[];
  children: ReactNode;
}

export const QueryBuilderProvider = ({
  builder,
  categories,
  brands,
  productTypes,
  children
}: QueryBuilderProviderProps) => {
  if (!builder) {
    throw new Error('QueryBuilderProvider requires a builder instance.');
  }

  return (
    <QueryBuilderContext.Provider value={{ builder, categories, brands, productTypes }}>
      {children}
    </QueryBuilderContext.Provider>
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
