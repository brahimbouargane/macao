export type AuthData = {
  user: AuthenticatedUserData;
};
export type AuthenticatedUserData = {
  id: number;
  email: string;
  name: string;
  avatar: string | null;
  email_verified_at: string | null;
};
export type CategoryData = {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  parentCategory: CategoryData | null;
  parent_id: string | null;
  created_at: string | null;
  updated_at: string | null;
};
export type FlashMessageData = {
  type: string;
  message: string;
};
export type LinkData = {
  url: string | null;
  label: string;
  active: boolean;
};
export type ModelsCountData = {
  user: number;
  category: number;
};
export type PagePropsData = {
  auth: AuthData;
  flashMessage: FlashMessageData;
  locale: string;
  modelsCount: ModelsCountData;
  paginationData: PaginationData;
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
export type UserData = {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
};
