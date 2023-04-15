'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import Image from 'next/image';
import clsx from 'clsx';
import Icon, { IconName } from '../icons/Icon';

type Link = {
    href: string,
    label: string,
    icon: IconName
}

const links: Link[] = [
    {
        href: '/',
        label: 'Home',
        icon: 'home'
    },
    {
        href: 'dashboard',
        label: 'Dashboard',
        icon: 'dashboard'
    },
    {
        href: 'products',
        label: 'Usługi',
        icon: 'lashes'
    },
    {
        href: 'customers',
        label: 'Klienci',
        icon: 'woman'
    },
    {
        href: 'workers',
        label: 'Pracownicy',
        icon: 'person'
    }
]

export const Navigation = () => {
    const segment = useSelectedLayoutSegment()
    const [collapsed, setCollapsed] = useState(false)

    return (
        <nav className='p-4 relative'>
            <ul className='gap-4 justify-center'>
                {links.map((link, i) =>
                    <li key={`${link.href}_${i}`} className={`text-gray-500 hover:bg-slate-100 rounded-lg px-2 ${segment === link.href ? 'text-gray-800 font-bold' : ''}`}>
                        <Link href={link.href}>
                            <div className='my-2 flex justify-center items-center'>
                                <Icon name={link.icon} />
                                <div className={clsx('transition-all ease-in-out duration-700', !collapsed ? 'w-32 ml-2' : 'w-0 opacity-0')}>
                                    <p className='text-lg'>{link.label}</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                )}
            </ul>
            <button className='absolute rounded-full border-2 bottom-10 -right-4 bg-white' onClick={() => setCollapsed(!collapsed)}>
                <Icon name='arrowRight' size={30} className={clsx('transition ease-in-out duration-700', !collapsed && 'rotate-180')} />
            </button>
        </nav>
    )
};