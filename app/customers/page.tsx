'use client'
import { CustomerList } from "./components/list/CustomerList";

export default function Page() {
  return (
    <div className="min-w-1/2">
      <div className="flex w-full justify-between my-10">
        <p>Podgląd</p>
        <button className="bg-sky-500 rounded-lg text-white border py-2 px-10">Dodaj Klienta</button>
      </div>
      <CustomerList />
    </div>
  );
}