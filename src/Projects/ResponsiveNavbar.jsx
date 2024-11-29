import { div } from "framer-motion/client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";

export default function ResponsiveNavbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="overflow-x-hidden">
      <Navbar1 open={open} setOpen={setOpen} />
    </div>
  );
}

const NavData = [
  { id: 1, Page: "Home", Link: "#" },
  { id: 2, Page: "About", Link: "#" },
  { id: 3, Page: "Services", Link: "#" },
  { id: 4, Page: "Contact", Link: "#" },
];

function Navbar1({ open, setOpen }) {
  return (
    <>
      {" "}
      <nav className="">
        <div className="w-full px-12 text-lg flex justify-between items-center py-2">
          {/* logo section */}
          <div className=" text-2xl flex items-center font-bold py-8">
            <FaDumbbell className="" />
            <p>Coders</p>
            <p className="text-orange-300">Gym</p>
          </div>

          {/* menu section */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-slate-600 ">
              {NavData.map((item) => (
                <li
                  key={item.id}
                  className="inline-block py-1 px-3 font-semibold hover:text-orange-400"
                >
                  <a href={item.Link}>{item.Page}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* icon section
            <div>
              <button className='text-2xl hover:bg-orange-400 hover:text-white '></button>
              <CiSearch className='inline-block text-2xl mr-4' />
            </div> */}

          {/* mobile hamburger */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-3xl cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* mobile sidebar section */}
      {
        open && (
          <div className="text-xl font-semibold bg-orange-400 text-white py-10 mx-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>

          </div>
      )
      }
      



    </>
  );
}
