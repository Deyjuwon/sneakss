import { IoCartOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { IoSearch } from "react-icons/io5";



const Header = () => {
  return (
    <nav className="text-sm font-bold flex justify-between items-center z-50 p-5 fixed w-full top-0 bg-white">
        <ul className="flex items-center gap-12">
            <li><a href="" className="logo text-primaryRed text-2xl">Sneakss</a></li>
            <li><a href="">New</a></li>
            <li><a href="">Men</a></li>
            <li><a href="">Women</a></li>
        </ul>
        <ul className="flex items-center gap-12">
            <ul className="relative">
                <li><input type="text" placeholder="Search" className="pl-4 outline-primaryRed relative w-64 font-normal  h-10 border border-gray-400" /></li>
                <li className="absolute top-2 right-2  "><IoSearch size={24} /></li>


            </ul>
            
            <ul className="flex items-center gap-2">
                <li><MdPersonOutline size={30} /></li>
                <li><a href="">Log in</a></li>
                <li><p>|</p></li>
                <li><a href="">Join</a></li>

            </ul>
            
            <li><IoCartOutline size={30} /></li>

        </ul>
    </nav>
  )
}

export default Header
