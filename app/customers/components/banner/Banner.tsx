import React from 'react';

export const Banner = () => {
    return (
        <div className="flex rounded-lg p-2 gap-8 divide-x bg-sky-500">
            <div className="p-2">
                <p className="text-sky-200 uppercase text-xs">Liczba klientów</p>
                <p className="text-white text-xl">200</p>
                <p className="text-sky-200 text-xs">+10</p>
            </div>
            <div className="p-2">
                <p className="text-sky-200 uppercase text-xs">Klientki w tym miesiącu</p>
                <p className="text-white text-xl">80</p>
                <p className="text-sky-200 text-xs">+2</p>
            </div>
            <div className="p-2">
                <p className="text-sky-200 uppercase text-xs">Klient miesiąca</p>
                <p className="text-white text-xl">Anna Lewandowska</p>
            </div>
        </div>
    )
};