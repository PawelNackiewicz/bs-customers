'use client'
import { mockAddCustomer } from "./services/customerService";
import AddCustomerForm from "./components/AddCustomerForm";

export default function Page() {
  return (
    <div className="min-w-1/2">
      <div className="flex w-full justify-between my-10">
        <p>Podgląd</p>
        <button className="text-sky-500 rounded-lg border-sky-500 border py-2 px-10">Dodaj Klienta</button>
      </div>
      <div className="flex rounded-lg p-2 gap-8 divide-x bg-sky-500">
        <div className="p-2">
          <p className="text-sky-200 uppercase text-xs">Liczba klientów</p>
          <p className="text-white text-xl">200</p>
          <p className="text-sky-200 text-xs">+10</p>
        </div>
        <div className="p-2">
          <p className="text-sky-200 uppercase text-xs">Klientki w tym miesiącu</p>
          <p className="text-white text-xl">80</p>
          <p className="text-sky-200 text-xs">+2</p>
        </div>
        <div className="p-2">
          <p className="text-sky-200 uppercase text-xs">Klient miesiąca</p>
          <p className="text-white text-xl">Anna Lewandowska</p>
        </div>
      </div>
      {/* <AddCustomerForm addCustomer={mockAddCustomer} /> */}
    </div>
  );
}