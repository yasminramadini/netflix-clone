import React from "react";
import Logo from "../utils/Logo";
import Link from "../utils/Link";
import { MdLanguage } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="py-4">
      <div className="container flex">
        <a href="#">
          <Logo width="120px" />
        </a>
        <div className="flex items-center gap-7 ml-auto">
          <div className="select-language border-2 border-white px-3 py-2 rounded flex items-center gap-1 hidden md:block">
            <MdLanguage className="text-white w-5 h-5" />
            <select
              name=""
              id=""
              className="bg-transparent text-white border-none cursor-pointer"
            >
              <option>English</option>
              <option>Bahasa Indonesia</option>
            </select>
          </div>
          <Link url="/login" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
