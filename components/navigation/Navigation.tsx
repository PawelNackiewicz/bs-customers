import React from 'react';
import Link from 'next/link';

export const Navigation = () => {
    return (
        <nav className='border-b-2 border-gray-500 p-2'>
            <ul className='flex gap-4 justify-end'>
                <li>
                    <Link href={`/products`}>
                        Usługi
                    </Link>
                </li>
                <li>
                    <Link href={`/customers`}>
                        Klienci
                    </Link>
                </li>
                <li>
                    <Link href={`/customers`}>
                        Pracownicy
                    </Link>
                </li>
            </ul>
        </nav>
    )
};