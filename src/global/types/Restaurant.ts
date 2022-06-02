import Category from "./Category";

export default interface Restaurant {
  id: string;
  name: string;
  place: string;
  categories: Category[];
}
