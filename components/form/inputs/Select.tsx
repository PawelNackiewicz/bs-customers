import React, { HTMLAttributes, InputHTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

interface SelectProps extends InputHTMLAttributes<HTMLSelectElement> {
    fieldId: string,
    label: string,
    required?: boolean,
    register: UseFormRegister<FieldValues>,
    errors?: FieldError | undefined,
    defaultValue?: string,
    options?: Option[]
}

type Option = {
    id: string,
    label: string,
    value: string
}

export const Select = ({ fieldId, label, register, required, errors, defaultValue, options, ...rest }: SelectProps) => {
    return (
        <div className="flex flex-col flex-1">
            <label htmlFor={fieldId} className="text-xs mb-2 text-gray-700">{label}</label>
            <select id={fieldId} defaultValue={defaultValue} {...register(fieldId, { required })} className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm h-7" {...rest} >
                {options?.map(e => {
                    return <option value={e.value} key={e.id}>{e.label}</option>
                })}
            </select>
            {errors && <span className="text-xs text-red-500 mt-2" role="alert">Pole jest wymagane</span>}
        </div>
    )
};