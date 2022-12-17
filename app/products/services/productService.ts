import { AddProductsFormInputs } from "../components/AddProductsForm";

export const mockAddProduct = (data: AddProductsFormInputs) => {
  return new Promise<AddProductsFormInputs>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
