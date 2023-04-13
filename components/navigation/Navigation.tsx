'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';

const links = [
    {
        href: '/',
        label: 'Home',
        icon: '/icons/home.svg'
    },
    {
        href: 'dashboard',
        label: 'Dashboard',
        icon: '/icons/dashboard.svg'
    },
    {
        href: 'products',
        label: 'Usługi',
        icon: '/icons/lashes.svg'
    },
    {
        href: 'customers',
        label: 'Klienci',
        icon: '/icons/woman.svg'
    },
    {
        href: 'workers',
        label: 'Pracownicy',
        icon: '/icons/person.svg'
    }
]

export const Navigation = () => {
    const segment = useSelectedLayoutSegment()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <nav className='p-4 relative'>
            <ul className='gap-4 justify-center'>
                {links.map((link, i) =>
                    <li key={`${link.href}_${i}`} className={`text-gray-500 hover:text-sky-500 ${segment === link.href ? 'text-gray-800 font-bold' : ''}`}>
                        <Link href={link.href}>
                            <div className='my-2 flex'>
                                <Image src={link.icon} alt={link.label} width={30} height={30} />
                                <div className={clsx('transition-all ease-in-out duration-700', !collapsed ? 'w-32 ml-2' : 'w-0 opacity-0')}>
                                    <p className='text-lg'>{link.label}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
            <button className='absolute rounded-full border-2 bottom-10 -right-4 bg-white' onClick={() => setCollapsed(!collapsed)}>
                <Image src='/icons/arrowRight.svg' alt='navExtend' width={30} height={30} className={clsx('transition ease-in-out duration-700', !collapsed && 'rotate-180')} />
            </button>
        </nav>
    )
};