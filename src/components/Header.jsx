/* eslint-disable react/prop-types */
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = ({ showSearchBar }) => {
  return (
    <header className="text-sm font-bold flex flex-col md:flex-row justify-between items-center z-50 p-5 fixed w-full top-0 bg-white">
      
      {/* Logo and Cart on Mobile, Full Nav on Larger Screens */}
      <div className="flex justify-between gap-12 items-center w-full md:w-auto">
        <Link className="text-primaryRed text-base md:text-2xl logo" to='/'>Sneakss</Link>
        <nav className="md:flex items-center hidden gap-12">
          <a href="#">New</a>
          <a href="#">Men</a>
          <a href="#">Women</a>
        </nav>
        <IoCartOutline size={30} className="md:hidden" />
      </div>
      
      {/* Conditionally Render Search Bar */}
      {showSearchBar && (
        <div className="w-full mt-4 md:mt-0 md:w-auto relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-64 pl-4 h-10 border border-gray-400 outline-primaryRed"
          />
          <button className="absolute top-2 right-2">
            <IoSearch size={24} />
          </button>
        </div>
      )}

      {/* Full Navigation and User Controls on Larger Screens */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex items-center gap-2">
          <li>
            <MdPersonOutline size={30} />
          </li>
          <li>
            <Link to='/login'>Log in</Link>
          </li>
          <li>|</li>
          <li>
            <Link to='/login'>Join</Link>
          </li>
        </ul>
        
        <IoCartOutline size={30} className="hidden md:block" />
      </div>
    </header>
  );
};

export default Header;
