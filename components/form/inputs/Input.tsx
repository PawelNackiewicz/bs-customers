import React, { InputHTMLAttributes } from 'react';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    fieldId: string,
    label: string,
    required?: boolean,
    placeholder?: string,
    register: UseFormRegister<FieldValues>,
    errors?: FieldError | undefined
}

export const Input = ({ fieldId, label, required, placeholder, register, errors, ...rest }: InputProps) => {

    return (
        <div className="flex flex-col">
            <label htmlFor={fieldId} className="text-xs mb-2 text-gray-700">{label}</label>
            <input id={fieldId} className="rounded-lg border-2 border-gray-300 bg-gray-100 w-full px-4 shadow-sm" placeholder={placeholder} {...register(fieldId, { required })} {...rest} />
            {errors && <span className="text-xs text-red-500 mt-2" role="alert">Pole jest wymagane</span>}
        </div>
    )
};