'use client'
import AddProductsForm, { AddProductsFormInputs } from "./components/AddProductsForm";
import { mockAddProduct } from "./services/productService";

export default function Page() {
  return (
    <div className="ml-40">
      <AddProductsForm addProduct={mockAddProduct} />
    </div>
  );
}