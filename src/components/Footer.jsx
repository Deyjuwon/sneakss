/* eslint-disable react/prop-types */
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Footer = ({bgColor, textColor}) => {
  return (
    <footer className={`text-sm flex py-12  justify-around bg-${bgColor} text-${textColor}  flex-wrap`}>
        <div className="w-1/2 lg:w-auto  flex flex-col gap-5 pl-4">
            <p className="font-bold">ABOUT US</p>
            <div className="flex flex-col gap-2">
                <a href="">Our Stores</a>
                <a href="">Our Purpose</a>
                <a href="">Our Purpose</a>
            </div>
            
        </div>
        <div  className="w-1/2 md:w-auto flex flex-col gap-5 ">
            <p className="font-bold">SUPPORT</p>
            <div className="flex flex-col gap-2">
                <a href="">Shipping And Returns</a>
                <a href="">Order Tracking</a>
                <a href="">Order Cancellation</a>
                <a href="">Get Help</a>
            </div>
            

        </div>
        <div  className="flex flex-col gap-5 pt-8 md:pt-0">
            <p className="font-bold">CONNECT WITH US</p>
            <div className="flex  gap-2">
                <FaInstagram size={20} />
                <FaXTwitter size={20} />
                <FaTiktok size={20} />
                <FaFacebookF size={20} />
            </div>
            

        </div>
    </footer>
  )
}

export default Footer
