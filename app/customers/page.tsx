'use client'
import { mockAddCustomer } from "./services/customerService";
import AddCustomerForm from "./components/AddCustomerForm";

export default function Page() {
  return (
    <div className="ml-40">
      <AddCustomerForm addCustomer={mockAddCustomer} />
    </div>
  );
}