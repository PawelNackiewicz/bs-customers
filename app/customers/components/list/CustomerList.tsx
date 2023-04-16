import React, { useMemo, useState } from 'react'
import Image from 'next/image';

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'
import { Customer, CUSTOMERS } from '../../services/customerService';

export const CustomerList = () => {
    const columns = useMemo<ColumnDef<Customer>[]>(
        () => [
            {
                accessorKey: 'firstName',
                cell: ({ row: { original } }) => {
                    return (
                        <div className='flex gap-2 items-center'>
                            {original.photoUrl && <Image className='rounded-full' src={original.photoUrl} width={40} height={40} alt={original.lastName} />}
                            {original.firstName}
                        </div>
                    )
                },
                header: () => <span>Imie</span>,
            },
            {
                accessorFn: row => row.lastName,
                id: 'lastName',
                cell: info => info.getValue(),
                header: () => <span>Nazwisko</span>,
            },
            {
                accessorFn: row => row.phone,
                id: 'phone',
                cell: info => info.getValue(),
                header: () => <span>Telefon</span>,
            },
            {
                accessorFn: row => row.email,
                id: 'email',
                cell: info => info.getValue(),
                header: () => <span>Email</span>,
            },
        ],
        []
    )

    const [sorting, setSorting] = React.useState<SortingState>([])
    const [data, setData] = useState(() => [...CUSTOMERS])

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        debugTable: true,
    })

    return (
        <div className="p-2">
            <table className='border-separate border-spacing-y-4'>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id} className='text-sm '>
                            {headerGroup.headers.map(header => (
                                <th key={header.id} className='font-normal text-gray-700'>
                                    <div
                                        className='flex m-2'
                                        onClick={header.column.getToggleSortingHandler()
                                        }>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                        {{
                                            asc: ' 🔼',
                                            desc: ' 🔽',
                                        }[header.column.getIsSorted() as string] ?? null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id} className='bg-white rounded-lg'>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id} >
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
};
