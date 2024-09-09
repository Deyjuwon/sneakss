/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { UserContext } from "../../UserContext";
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";


const Header = ({ showSearchBar }) => {
  const { user, setUser } = useContext(UserContext); // Destructure setUser from context
  const navigate = useNavigate();

  const auth = getAuth();
  function handleSignOut() {
    signOut(auth).then(() => {
      // Sign-out successful, set user to null
      setUser(null);
      navigate('/login');
      console.log('Sign-out successful');
    }).catch((error) => {
      // An error happened.
      console.error('Sign-out failed', error);
    });
  }

  return (
    <header className="text-sm font-bold flex flex-col md:flex-row justify-between items-center z-50 p-5 fixed w-full top-0 bg-white">
      <div className="flex justify-between gap-12 items-center w-full md:w-auto">
        <Link className="text-primaryRed text-base md:text-2xl logo" to='/'>Sneakss</Link>
        <nav className="md:flex items-center hidden gap-12">
          <Link to="/new">New</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
        </nav>
        <Link to='/cart'><IoCartOutline size={30} className="md:hidden" /></Link>
      </div>

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

      <div className="hidden md:flex items-center gap-12">
        {user ? (
          <div className="flex items-center gap-2">
            <p className="font-normal">Hello, {user.displayName}!</p>
            <p>|</p>
            <p onClick={handleSignOut} className="cursor-pointer">Log out</p>
          </div>
        ) : (
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
        )}
        <Link to='/cart'><IoCartOutline size={30} className="hidden md:block" /></Link>
      </div>
    </header>
  );
};

export default Header;
