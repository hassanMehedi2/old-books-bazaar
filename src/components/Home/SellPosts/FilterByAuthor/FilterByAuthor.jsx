import React from 'react';
import { Link } from 'react-router-dom';

const FilterByAuthor = () => {
    return (
        <div className="p-5 text-[#777777]">
        <p className=" text-base font-semibold mb-5">Authors</p>
        <div className='space-y-2 flex flex-col'>
            <Link to={'/authors'}>Humayun Ahmed</Link>
            <Link to={'/authors'}>Akhteruzzaman Elias</Link>
            <Link to={'/authors'}>Haruki Murakami</Link>
            <Link to={'/authors'}>Stephen King</Link>
            <Link to={'/authors'}>Gabriel Garcia Marquez</Link>
        
        </div>
    </div>
    );
};

export default FilterByAuthor;