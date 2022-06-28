import axios from "axios";

export const FetchProductList = async () => {
  const { data } = await axios.get(
    "https://projectone.proxolab.com/api/products"
  );
  return data;
};

export const FetchLogin = async (input) => {
  const { data } = await axios.post(
    "https://projectone.proxolab.com/api/auth/login",
    input
  );
  return data;
};
