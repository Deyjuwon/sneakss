import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RandomProducts from "../components/RandomProducts";
import EmptyCart from "../components/EmptyCart";
import FilledCart from "../components/FilledCart";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Retrieve cart data from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  // Function to remove an item from the cart
  const handleRemove = (id) => {
    // Filter out the item with the matching id
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    // Update localStorage with the new cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="pt-32 md:pt-24 ">
      <Header showSearchBar={true} />
      {cartItems.length > 0 ? (
        <FilledCart cartItems={cartItems} onRemove={handleRemove} />
      ) : (
        <EmptyCart />
      )}
      <div className="pt-20">
        <p className="text-[22px] font-bold px-5">You might also like</p>
        <RandomProducts />
      </div>
      <Footer bgColor="222222" textColor="white" />
    </div>
  );
};

export default Cart;
