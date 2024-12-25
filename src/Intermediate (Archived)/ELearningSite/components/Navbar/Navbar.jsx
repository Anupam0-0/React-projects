import React from "react";
import { NavbarMenu } from "../../mockData/data";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
    const [isOpen, setIsopen] = React.useState(false);

    return (
        <>
            <nav className="w-100vw">
                <div className="w-full flex justify-between items-center py-6 px-10 ">
                    {/* Logo section */}
                    <div className="text-2xl flex items-center gap-2 font-bold">
                        <MdComputer className="text-3xl text-blue-600" />
                        <h1 className="">Tutoring</h1>
                    </div>

                    {/* Menu section */}
                    <div className="hidden lg:block  gap-10">
                        <ul className="flex items-center gap-6">
                            {NavbarMenu.map((item) => {
                                return (
                                    <li key={item.id}>
                                        <a
                                            href={item.link}
                                            className="text-gray-900 inline-block text-sm xl:text-base py-1 px-2 xl:px-3  hover:text-blue-600 transition duration-300 font-semibold"
                                        >
                                            {item.title}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* CTA button section */}
                    <div className="hidden lg:block space-x-4">
                        <button className="font-semibold"> Sign in </button>
                        <button className="text-white bg-blue-600 font-semibold rounded-full px-6 py-2">
                            {" "}
                            Register{" "}
                        </button>
                    </div>

                    {/* mobile hamburger menu secction */}
                    <div
                        className="lg:hidden"
                        onClick={() => setIsopen(!isOpen)}
                    >
                        <MdMenu className="text-4xl" />
                    </div>
                </div>
            </nav>

            {/* mobile sidebar section */}
            <ResponsiveMenu isOpen={isOpen} />
        </>
    );
};

export default Navbar;
