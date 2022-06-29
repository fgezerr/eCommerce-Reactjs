import axios from "./utils/axios";

export const FetchProductList = async () => {
  const { data } = await axios.get("products");
  return data;
};

export const FetchCategoryList = async () => {
  const { data } = await axios.get("categories");
  return data;
};

/* export const FetchSubCategoryList = async () => {
  const { data } = await axios.get("subCategory");
  return data;
}; */
