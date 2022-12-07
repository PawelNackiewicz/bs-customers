'use client';
import { useForm } from "react-hook-form";

export interface AddProductsFormInputs {
    title: string,
    description: string,
    duration: string,
    price: string,
    priority: Priority,
};

type Priority = 'HIGH' | 'MEDIUM' | 'SMALL'

interface AddProductsFormProps {
    addProduct: (data: AddProductsFormInputs) => Promise<AddProductsFormInputs>
}

export default function AddProductsForm({ addProduct }: AddProductsFormProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddProductsFormInputs>();
    const onSubmit = async (data: AddProductsFormInputs) => {
        await addProduct(data)
        reset();
    };
    return (
        <div className="p-40">
            <h2 className="mb-10">Dodaj nową usługę</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-md gap-2'>
                <div className="flex flex-col">
                    <label htmlFor="title" className="text-xs mb-2 text-gray-700">Nazwa usługi</label>
                    <input id="title" className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm" placeholder="Nazwa" {...register("title", { required: true })} />
                    {errors.title && <span className="text-xs text-red-500 mt-2" role="alert">Pole jest wymagane</span>}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description" className="text-xs mb-2 text-gray-700">Opis usługi</label>
                    <textarea id="description" className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm" placeholder="Opis" {...register("description")} />
                </div>
                <div className="flex w-full gap-2">
                    <div className="flex flex-col flex-1">
                        <label htmlFor="duration" className="text-xs mb-2 text-gray-700">Czas usługi</label>
                        <input id="duration" type='number' className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm" placeholder="Czas" {...register("duration")} />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="price" className="text-xs mb-2 text-gray-700">Cena</label>
                        <input id="price" type='number' className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm" placeholder="Cena" {...register("price", { required: true })} />
                        {errors.title && <span className="text-xs text-red-500 mt-2" role="alert">Pole jest wymagane</span>}
                    </div>
                    <div className="flex flex-col flex-1">
                        <label htmlFor="priority" className="text-xs mb-2 text-gray-700">Priorytet</label>
                        <select id="priority" defaultValue="MEDIUM" {...register("priority")} className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm h-7">
                            <option value="HIGH">wysoki</option>
                            <option value="MEDIUM">normalny</option>
                            <option value="SMALL">niski</option>
                        </select>
                    </div>
                </div>
                <div className="flex w-full justify-between mt-10">
                    <button type="button" className="rounded-lg py-2 px-4">Anuluj</button>
                    <button type="submit" data-testid='pawiBtn' className="bg-blue-500 rounded-lg text-white py-2 px-10">Dodaj</button>
                </div>
            </form >
        </div>
    );
}