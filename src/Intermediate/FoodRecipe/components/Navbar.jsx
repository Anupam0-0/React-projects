import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { GlobalContext } from './context';

export default function Navbar() {
    const { searchParams, setSearchParams, handleSubmit } = useContext(GlobalContext);

    return (
        <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
            <h2 className="text-2xl font-semibold">
                <NavLink to="/" className="text-black hover:text-gray-700 duration-300">
                    FoodRecipe
                </NavLink>
            </h2>
            <form onSubmit={handleSubmit}> {/* onSubmit should be here */}
                <input
                    type="text"
                    name="search"
                    placeholder="Enter Items..."
                    value={searchParams}
                    onChange={(e) => setSearchParams(e.target.value)}
                    className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-[22vw] shadow-lg shadow-red-100 focus:shadow-red-200"
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to="/" className="text-black hover:text-gray-700 duration-300">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/favourites" className="text-black hover:text-gray-700 duration-300">
                        Favourites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
