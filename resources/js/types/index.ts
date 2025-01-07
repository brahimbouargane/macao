export type AuthData = {
  user: AuthenticatedUserData;
};
export type AuthenticatedUserData = {
  id: number;
  email: string;
  name: string;
  avatar: ImageConversionData | null;
  email_verified_at: string | null;
};
export type BrandData = {
  id: string;
  name: string;
  productsCount: string | null;
  created_at: string | null;
  updated_at: string | null;
};
export type CategoryData = {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  optimizedImage: string | null;
  parentCategories: Array<CategoryData> | null;
  childCategoriesNames: Array<any> | null;
  parentCategoriesNames: Array<any> | null;
  created_at: string | null;
  updated_at: string | null;
};
export type FlashMessageData = {
  type: string;
  message: string;
};
export type ImageConversionData = {
  thumbnail: string | null;
  optimized: string | null;
};
export type LinkData = {
  url: string | null;
  label: string;
  active: boolean;
};
export type ModelsCountData = {
  user: number;
  category: number;
  product: number;
  brand: number;
};
export type PagePropsData = {
  auth: AuthData;
  flashMessage: FlashMessageData;
  locale: string;
  modelsCount: ModelsCountData;
  user: UserData;
  component: string;
  translations: Array<any>;
};
export type PaginationData = {
  current_page: number;
  data: Array<any>;
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Array<LinkData> | null;
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};
export type ProductData = {
  id: string;
  ref: string;
  name: string | null;
  description: string | null;
  primaryImage: ImageConversionData | null;
  categories: Array<CategoryData> | null;
  categoriesNames: Array<any> | null;
  secondaryImages: Array<ImageConversionData> | null;
  brand: BrandData | null;
  productType: ProductTypeData | null;
  price: number | null;
  weight: number | null;
  packaging: string | null;
  tc_20: string | null;
  tc_40: string | null;
  updated_at: string | null;
  created_at: string;
};
export type ProductTypeData = {
  id: string;
  name: string;
  created_at: string | null;
  updated_at: string | null;
};
export type ReferenceData = {
  id: string;
  ref: string;
  weight: number;
  packaging: string;
  tc_20: string;
  tc_40: string;
  product_id: string | null;
  updated_at: string | null;
  created_at: string;
};
export type UserData = {
  id: string;
  name: string;
  email: string;
  avatar: ImageConversionData | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};
