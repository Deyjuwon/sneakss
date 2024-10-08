import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 pt-10">
      <h1 className="font-bold text-[22px] ">Cart</h1>
      <div className="flex justify-center items-center flex-col pt-32 gap-8">
        <p>There are no items in your cart!</p>
        <button className="h-[70px] w-[380px] flex justify-center font-semibold items-center text-sm bg-primaryRed text-white " onClick={() => navigate('/')}>Continue Shopping</button>
      </div>
    </div>
    
  )
}

export default EmptyCart
