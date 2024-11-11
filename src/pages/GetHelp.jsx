import Header from "../components/Header"
import Footer from "../components/Footer"
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const GetHelp = () => {
  return (
    <div className="pt-32 md:pt-24">
      <Header showSearchBar={true} />
      <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <p className="text-3xl font-semibold">GET HELP</p>
        <input className="pl-4 h-20 w-[30%] border border-gray-400 rounded-xl" type="text" placeholder="What can we help you with?" />
      </div>
      <div className="pt-32  px-5">
          <p className="text-2xl font-medium">Contact Us</p>
          <p className="pb-5">Wait times may be longer than usual due to high contact volume. Thanks for your patience.</p>
          <hr />
          <div className="flex justify-around items-center pb-20 pt-4">
            <div className="flex flex-col items-center gap-3">
              <IoChatboxEllipsesOutline size={50} />
              <p>Chat with us</p>
              <div className="flex  gap-2">
                <FaInstagram size={20} />
                <FaXTwitter size={20} />
                <FaTiktok size={20} />
                <FaFacebookF size={20} />
            </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <FiPhoneCall size={50} />
              <p>Call us</p>
              <p>+234 9090 883663, +234 9099 9444999</p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <FaLocationDot size={50} />
              <p>Find a store</p>
              <a href="" className="underline">see stores</a>
            </div>


          </div>
        </div>
      <Footer bgColor='222222' textColor='white' />
      
      
    </div>
  )
}

export default GetHelp
