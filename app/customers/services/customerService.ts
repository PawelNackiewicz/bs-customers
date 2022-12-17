import { AddCustomerFormInputs } from "../components/AddCustomerForm";

export const mockAddCustomer = (data: AddCustomerFormInputs) => {
  return new Promise<AddCustomerFormInputs>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
