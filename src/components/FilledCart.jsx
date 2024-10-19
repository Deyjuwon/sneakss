const FilledCart = ({ cartItems, onRemove }) => {
  // Calculate the subtotal by summing up the prices of all cart items
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="px-5 pt-10 flex gap-10 flex-col md:flex-row">
      <div className="w-full md:w-1/2">
        <h1 className="font-bold text-[22px]">Cart</h1>
        
        <div className="pt-14 flex flex-col gap-10">
          {cartItems.map((item) => (
            <div className="flex justify-between" key={item.id}>
              <div className="flex gap-4">
                <img src={item.image} alt={item.name} className="w-[170px] h-[170px]" />
                <div className="text-sm flex flex-col justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="font-bold pb-2">{item.name}</p>
                    <p>{item.color}</p>
                    <p>Size {item.size}</p>
                    <p>Quantity {item.quantity}</p>
                  </div>
                  <div>
                    <p
                      className="underline cursor-pointer"
                      onClick={() => onRemove(item.id)} // Call the onRemove function
                    >
                      Remove
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-bold text-sm">₦{(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-[#800000] h-[500px] w-[40%] px-5 text-sm">
        <p className="text-xl font-bold pt-7 pb-14">Order Summary</p>
        <div className="flex flex-col gap-10">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="font-bold">₦{subtotal.toLocaleString()}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery</p>
            <p>Free</p>
          </div>
        </div>

        <div className="border-t-black border border-white border-b-black mt-20 flex justify-between py-10">
          <p>Total</p>
          <p className="font-bold">₦{subtotal.toLocaleString()}</p>
        </div>

        <button className="h-[70px] w-full flex justify-center font-semibold items-center text-sm bg-primaryRed text-white mt-5">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default FilledCart;
