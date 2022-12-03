import { AddProductsFormInputs } from "../components/AddProductsForm";

export const mockAddProduct = (data: AddProductsFormInputs) => {
  return new Promise<AddProductsFormInputs>((resolve) => {
    setTimeout(() => {
      console.log(data);
      resolve(data);
    }, 500);
  });
};
