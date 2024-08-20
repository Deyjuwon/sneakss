import Header from "../components/Header"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Footer from "../components/Footer";

const Login = () => {
  return (
    <div>
        <Header />
        <div className="flex flex-col mt-32 mb-10 p-4 justify-center items-center gap-12">
            <p className="text-5xl font-normal">MY SNEAKS ACCOUNT</p>
            <div className="flex flex-col items-center justify-center gap-5">
                <button className="h-12 w-80 flex justify-center items-center gap-4 font-semibold text-base border border-gray-400" >
                    <span><FcGoogle size={25} /></span> 
                    <p>CONTINUE WITH GOOGLE</p>
                </button>

                <button className="h-12 w-80 flex justify-center items-center gap-4 font-semibold text-base border border-gray-400">
                    <span><FaApple size={25} /></span>
                    <p>CONTINUE WITH APPLE</p>
                </button>

                <p className="text-base">OR</p>
                <p className="text-4xl">CONTINUE WITH YOUR EMAIL ADDRESS</p>

                <div className="flex flex-col gap-5">
                    <input className="h-12 w-80 border border-gray-400 pl-4" placeholder="EMAIL" type="text" />
                    <button className="h-12 w-80 ustify-center items-center gap-4 font-semibold text-base bg-primaryRed text-white ">CONTINUE</button>
                </div>


            </div>
            
        </div>


        <Footer bgColor='black' textColor='white'  />
      
    </div>
  )
}

export default Login
