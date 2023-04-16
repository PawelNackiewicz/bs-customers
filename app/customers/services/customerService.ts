import { faker } from "@faker-js/faker";
import { AddCustomerFormInputs } from "../components/forms/AddCustomerForm";

export const mockAddCustomer = (data: AddCustomerFormInputs) => {
  return new Promise<AddCustomerFormInputs>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

export interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  birthdate?: Date;
  gender: "MALE" | "FEMALE";
  email?: string;
  phone?: string;
  source?: "SOCIAL MEDIA" | "FRIENDS" | "FAMILY";
  photoUrl?: string;
  instagram?: string;
  facebook?: string;
  notes?: string;
  healthContraindications?: string;
}

export const CUSTOMERS: Customer[] = [];

const photoUrl = faker.image.avatar();

export function createRandomCustomer(): Customer {
  return {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName("female"),
    lastName: faker.name.lastName("female"),
    email: faker.internet.email(),
    photoUrl,
    birthdate: faker.date.birthdate(),
    gender: "FEMALE",
    phone: faker.phone.number(),
  };
}

Array.from({ length: 5 }).forEach(() => {
  CUSTOMERS.push(createRandomCustomer());
});
