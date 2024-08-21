/* eslint-disable react/no-unescaped-entities */
import Header from "../components/Header"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Footer from "../components/Footer";
import { useState } from "react";


const Login = () => {
    const [showDetails, setShowDetails] = useState(false);
  
    const handleContinueClick = () => {
      setShowDetails(true);
    };
  
    return (
      <div>
        <Header showSearchBar={false} />
        <div className="flex flex-col mt-24 md:mt-32 mb-12 p-4 justify-center items-center gap-12">
          <p className="text-3xl md:text-5xl font-light">MY SNEAKS ACCOUNT</p>
          <div className="flex flex-col items-center justify-center gap-5">
            <button className="h-12 w-80 flex justify-center items-center gap-4 font-semibold text-sm md:text-base border border-gray-400">
              <span><FcGoogle size={25} /></span>
              <p>CONTINUE WITH GOOGLE</p>
            </button>
  
            <button className="h-12 w-80 flex justify-center items-center gap-4 font-semibold text-sm md:text-base border border-gray-400">
              <span><FaApple size={25} /></span>
              <p>CONTINUE WITH APPLE</p>
            </button>
  
            <p className="text-base">OR</p>
            <p className="text-2xl text-center md:text-4xl font-light">CONTINUE WITH YOUR EMAIL ADDRESS</p>
  
            
              <div className="flex flex-col gap-5">
                <input
                  className="h-12 w-80 border border-gray-400 pl-4 text-sm outline-primaryRed"
                  required
                  placeholder="EMAIL*"
                  type="text"
                />
                {!showDetails && (
                <button
                  type="submit"
                  className="h-12 w-80 justify-center items-center gap-4 font-semibold text-sm md:text-base bg-primaryRed text-white"
                  onClick={handleContinueClick}
                >
                  CONTINUE
                </button>)}
              </div>
            
  
            {showDetails && (
              <div id="details" className="flex flex-col items-center justify-center gap-8">
                <input
                  type="password"
                  placeholder="CREATE PASSWORD*"
                  className="h-12 w-80 border border-gray-400 pl-4 text-sm outline-primaryRed"
                  required
                />
                <input
                  type="text"
                  placeholder="FIRST NAME*"
                  className="h-12 w-80 border border-gray-400 pl-4 text-sm outline-primaryRed"
                />
                <input
                  type="text"
                  placeholder="LAST NAME*"
                  className="h-12 w-80 border border-gray-400 pl-4 text-sm outline-primaryRed"
                />
                <div className="w-80">
                  <p className="text-sm pb-2">DATE OF BIRTH*</p>
                  <div className="flex">
                    <input
                      type="text"
                      placeholder="MONTH*"
                      className="h-12 w-full border border-gray-400 pl-4 text-sm outline-primaryRed"
                    />
                    <input
                      type="text"
                      placeholder="DAY*"
                      className="h-12 w-full border border-gray-400 pl-4 text-sm outline-primaryRed"
                    />
                    <input
                      type="text"
                      placeholder="YEAR*"
                      className="h-12 w-full border border-gray-400 pl-4 text-sm outline-primaryRed"
                    />
                  </div>
                </div>
                <p className="w-80 text-sm leading-8">
                  By clicking "CREATE", you confirm that you agree to our Terms of Use, that you have acknowledged our privacy policy, and that you want to create your SNEAKSS profile.
                </p>
                <button
                  type="submit"
                  className="h-12 w-80 justify-center items-center gap-4 font-semibold text-sm md:text-base bg-primaryRed text-white"
                >
                  CREATE
                </button>
              </div>
            )}
          </div>
        </div>
        <Footer bgColor="black" textColor="white" />
      </div>
    );
  };
  
  export default Login;
  