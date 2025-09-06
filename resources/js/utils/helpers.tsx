import { GlobalState, QueryBuilder } from '@cgarciagarcia/react-query-builder';
import axios from 'axios';
import _ from 'lodash';
import { toast } from 'sonner';
import __ from './translations';

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



// AI TEXT GENERATOR
export async function generateTextUsingHuggingFace(productName:string,category:string,brand:string,language: 'French' | 'English'){
  
  const API_URL = import.meta.env.VITE_HUGGING_FACE_API_MODEL; // Change model if needed
    const API_TOKEN =  import.meta.env.VITE_HUGGING_FACE_API_TOKEN ; // Replace with your actual API key

    if(!API_TOKEN || !API_URL){
     
      return {ok: false,text: "A required configuration is missing. Please check your settings." }
    }
    try {
        // Prepare the request payload
        const response = await axios.post(
          API_URL,
          {
              inputs: `PASTOR MACAO is a leading Moroccan company that has been producing high-quality confectionery and chocolate products since 1948. Known for its dedication to excellence, Pastor Macao offers a wide range of products such as chocolates, biscuits, wafers, and spreads, crafted with premium ingredients and high manufacturing standards. The brand is recognized for its iconic red and white elephant logo, synonymous with quality and trust among Moroccan consumers.
      
              Now, based on the following product information, please generate a 5-line description in the language specified:
              
              Product Name: ${productName}
              Category: ${category}
              Brand: ${brand} 
              Language: ${language}
              
              If the brand is provided, include it in the description. If the brand is not provided, focus more on the category, quality, and the reputation of the company, highlighting its use of premium ingredients and high standards of manufacturing. The description should be suitable for the product's category and written in the specified language,  the description should primarily be about the product only  also only provide  the result text of the product description without any  indications such as "description": and with no new line before the result text or after `,
              parameters: {
                  max_new_tokens: 100, // Limit generated tokens
                  do_sample: true, // Enable sampling for more creativity
                  temperature: 0.7, // Balance randomness and coherence
                  top_p: 0.9, // Nucleus sampling
                  top_k: 50, // Consider top 50 tokens for generation
                  repetition_penalty: 1.2, // Penalize repetitive outputs
                  return_full_text: false, // Include the prompt in the generated text
              },
          },
          {
              headers: {
                  Authorization: `Bearer ${API_TOKEN}`,
              },
          }
        );

        // Extract the generated text
        const generatedText = response.data[0]?.generated_text || null;
        return {ok: true,text: _.trim(generatedText)  }
    } catch (error) {
      return {ok: false,text: error?.response?.data?.error || "Failed to generate description" }
    }
 
}



export function getFormErrorsFor(targets: string[], bag: Record<string, string | string[]>): number {
  if (!targets || !bag) return 0;

  // Filter errors to check if the target fields have any
  return targets.reduce((count, field) => {
    if (bag[field]) {
      // Increment count if the field has an error
      count += 1;
    }
    return count;
  }, 0);
}
