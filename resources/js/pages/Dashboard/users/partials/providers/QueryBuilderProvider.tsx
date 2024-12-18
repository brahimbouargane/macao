import { QueryBuilder } from '@cgarciagarcia/react-query-builder';
import  { createContext, useContext } from 'react';

// Define the context
const QueryBuilderContext = createContext<QueryBuilder>(null);

// Create a provider component
export const QueryBuilderProvider = ({ builder, children }) => {
  if (!builder) {
    throw new Error('QueryBuilderProvider requires a builder instance.');
  }

  
  return (
    <QueryBuilderContext.Provider value={builder}>
      {children}
    </QueryBuilderContext.Provider>
  );
};

// Create a custom hook to use the builder
export const useQueryBuilderUsersContext = () => {
    const context = useContext(QueryBuilderContext);
    if (!context) {
        throw new Error('useQueryBuilderContext must be used within a QueryBuilderProvider.');
    }
    return context;
};
