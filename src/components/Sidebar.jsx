import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";
import { RiCloseLine } from "react-icons/ri";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10 ">
    {links.map((item) => (
      // imported from React Router
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-teal-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* navigation wrapper */}
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-neutral-900/90">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>

      {/* mobile sidebar */}
      <div>
        {/* burguer icon */}
        {/* it will be hidden from middle upwards */}
        <div className="absolute md:hidden block top-6 right-3">
          {mobileMenuOpen ? (
            <RiCloseLine
              className="w-6 h-6 text-white mr-2"
              onClick={() => setMobileMenuOpen(false)}
            />
          ) : (
            <HiOutlineMenu
              className="w-6 h-6 text-white mr-2"
              onClick={() => setMobileMenuOpen(true)}
            />
          )}
        </div>

        {/* actual menu */}
        <div
          className={`absolute top-0 h-screen w-2/3 backdrop-blur-lg  bg-neutral-900/80 z-10 p-6 md:hidden ease-in duration-500 ${
            mobileMenuOpen ? "left-0" : "-left-full"
          } `}
        >
          <img src={logo} alt="logo" className="w-full h-14 object-contain" />
          <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
