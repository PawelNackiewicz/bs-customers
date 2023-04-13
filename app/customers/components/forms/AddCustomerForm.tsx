'use client';
import { useForm } from "react-hook-form";
import { Input } from "../../../../components/form/inputs/Input";
import { Select } from "../../../../components/form/inputs/Select";
import { Textarea } from "../../../../components/form/inputs/TextArea";

export interface AddCustomerFormInputs {
    firstName: string
    lastName: string
    birthdate?: Date
    gender: 'MALE' | 'FEMALE',
    email?: string,
    phone?: string,
    source?: 'SOCIAL MEDIA' | 'FRIENDS' | 'FAMILY',
    photoUrl?: string,
    instagram?: string,
    facebook?: string,
    notes?: string,
    healthContraindications?: string
};


interface AddCustomerFormProps {
    addCustomer: (data: AddCustomerFormInputs) => Promise<AddCustomerFormInputs>
}

export default function AddCustomerForm({ addCustomer }: AddCustomerFormProps) {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<AddCustomerFormInputs>();
    const onSubmit = async (data: AddCustomerFormInputs) => {
        await addCustomer(data)
        reset();
    };
    return (
        <div className="">
            <h2 className="mb-10">Dodaj nowego klienta</h2>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col max-w-md gap-2'>
                <Input fieldId="firstName" label="Imie" placeholder="Imie" register={register} required errors={errors.firstName} />
                <Input fieldId="lastName" label="Nazwisko" placeholder="Nazwisko" register={register} required errors={errors.lastName} />
                <Input fieldId="birthdate" label="Data urodzenia" placeholder="birthday" register={register} errors={errors.birthdate} type='date' />
                <Select fieldId="gender" defaultValue="FEMALE" register={register} label='płeć' options={[{ id: 'FEMALE', value: 'FEMALE', label: 'kobieta' }, { id: 'MALE', value: 'MALE', label: 'męzczyzna' }]} />
                <Input fieldId="email" label="email" placeholder="email" register={register} errors={errors.email} type='email' />
                <Input fieldId="phone" label="telefon" placeholder="telefon" register={register} errors={errors.phone} />
                <Input fieldId="photoUrl" label="photoUrl" placeholder="photoUrl" register={register} errors={errors.photoUrl} />
                <Input fieldId="instagram" label="instagram" placeholder="instagram" register={register} errors={errors.instagram} />
                <Input fieldId="facebook" label="facebook" placeholder="facebook" register={register} errors={errors.facebook} />
                <Textarea fieldId="notes" label="notes" placeholder="notes" register={register} errors={errors.notes} />
                <Textarea fieldId="healthContraindications" label="healthContraindications" placeholder="healthContraindications" register={register} errors={errors.healthContraindications} />

                <div className="flex w-full justify-between mt-10">
                    <button type="button" className="rounded-lg py-2 px-4">Anuluj</button>
                    <button type="submit" data-testid='pawiBtn' className="bg-sky-500 rounded-lg text-white py-2 px-10">Dodaj</button>
                </div>
            </form >
        </div>
    );
}