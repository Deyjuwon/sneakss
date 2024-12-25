/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";
import { UserContext } from "../../UserContext";
import { useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Header = ({ showSearchBar }) => {
  const { user, setUser } = useContext(UserContext); // Destructure setUser from context
  const navigate = useNavigate();
  const auth = getAuth();

  const [isOpened, setIsOpened] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to handle modal visibility
  const [cartCount, setCartCount] = useState(0); // State to handle cart item count
  const [searchQuery, setSearchQuery] = useState(''); // State to handle the search query

  useEffect(() => {
    // Retrieve cart items from localStorage and set the cart count
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
  }, []);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful, set user to null
        setUser(null);
        navigate("/login");
        console.log("Sign-out successful");
      })
      .catch((error) => {
        // An error happened
        console.error("Sign-out failed", error);
      });
  }

  function handleLogoutClick() {
    setShowModal(true); // Show modal when "Log out" is clicked
  }

  function handleModalClose() {
    setShowModal(false); // Close modal without logging out
  }

  function handleModalConfirm() {
    handleSignOut(); // Log out if user confirms
    setShowModal(false); // Close modal after confirming
  }

  // Function to handle search input changes
  function handleSearchChange(event) {
    setSearchQuery(event.target.value); // Update search query state
  }

  // Function to handle search submission
  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results page with the query as a URL parameter
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  }
  const handleNavLinkClick = () => {
    setIsOpened(false);
  };

  return (
    <header className="text-sm font-bold flex flex-col md:flex-row justify-between items-center z-10 p-5 fixed w-full top-0 bg-white">
      <div className="flex justify-between gap-12 items-center w-full md:w-auto">
        <Link className="text-primaryRed text-base md:text-xl logo" to="/">
          Sneakss
        </Link>
        <nav className="md:flex items-center hidden gap-12">
          <Link to="/new">New</Link>
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
        </nav>
        <div className="flex items-center gap-3">
            <Link to="/cart" className="relative">
              <IoCartOutline size={30} className="md:hidden" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center md:hidden justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            {isOpened ? (
            <div className=' flex items-center justify-center h-11 w-11 md:hidden z-50'>
              <IoMdClose className='fixed' size={20} onClick={() => setIsOpened(!isOpened)} />
            </div>
          ) : (
            <div className='  md:hidden'>
              <RxHamburgerMenu size={20}  onClick={() => setIsOpened(!isOpened)} />
            </div>
          )}
        </div>
        
      </div>
      

      {showSearchBar && (
        <form onSubmit={handleSearchSubmit} className="w-full mt-4 md:mt-0 md:w-auto relative">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery} // Bind input to searchQuery state
            onChange={handleSearchChange} // Update searchQuery on input change
            className="w-full md:w-64 pl-4 h-10 border box-border text-base  border-gray-400 outline-none"
          />
          <button type="submit" className="absolute top-2 right-2">
            <IoSearch size={24} />
          </button>
        </form>
      )}

      <div className="hidden md:flex items-center gap-12">
        {user ? (
          <div className="flex items-center gap-2">
            <p className="font-normal">Hello, {user.displayName}!</p>
            <p>|</p>
            <p onClick={handleLogoutClick} className="cursor-pointer">
              Log out
            </p>
          </div>
        ) : (
          <ul className="flex items-center gap-2">
            <li>
              <MdPersonOutline size={30} />
            </li>
            <li>
              <Link to="/login">Log in</Link>
            </li>
            <li>|</li>
            <li>
              <Link to="/login">Join</Link>
            </li>
          </ul>
        )}
        <Link to="/cart" className="relative">
          <IoCartOutline size={30} />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
        
      </div>
      


      

      {isOpened && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center pt-20 md:hidden">
          <ul className="text-gray-400 font-medium flex flex-col gap-5">
            <li><Link to="/new" className=" transition duration-200" onClick={handleNavLinkClick}>New</Link></li>
            <li><Link to="/men" className=" transition duration-200" onClick={handleNavLinkClick}>Men</Link></li>
            <li><Link to="/women" className=" transition duration-200" onClick={handleNavLinkClick}>Women</Link></li>
            <li><Link to="/login" className=" transition duration-200" onClick={handleNavLinkClick}>Login</Link></li>
          </ul>
        </div>
      )}

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-lg font-bold mb-4">Are you sure you want to log out?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleModalConfirm}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Yes
              </button>
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
