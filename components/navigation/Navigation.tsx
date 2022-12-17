'use client'
import React from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const links = [
    {
        href: 'products',
        label: 'Usługi'
    },
    {
        href: 'customers',
        label: 'Klienci'
    },
    {
        href: 'workers',
        label: 'Pracownicy'
    }
]

export const Navigation = () => {
    const segment = useSelectedLayoutSegment()

    return (
        <nav className='border-b-2 border-gray-200 p-2'>
            <ul className='flex gap-4 justify-center'>
                {links.map((link, i) =>
                    <li key={`${link.href}_${i}`} className={`text-gray-500 hover:text-blue-500 ${segment === link.href ? 'text-gray-800' : ''}`}>
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
};