import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Newsletter = () => {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div
      className={`h-dvh w-[40%] bg-[#f7f7f7] fixed top-0 z-20 flex flex-col gap-5 px-14 transition-all duration-1000 ease-in-out ${
        isOpened ? "right-0" : "-right-[1500px]"
      }`}
    >
      <div className="pt-10 flex justify-end">
        <div
          className="rounded-full bg-[#222222] h-10 w-10 flex justify-center items-center cursor-pointer"
          onClick={() => setIsOpened(!isOpened)}
        >
          <IoMdClose size={25} color="white" />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-2xl tracking-wide">STAY UP TO DATE WITH THE SNEAKSS NEWSLETTER</p>
        <p className="text-base">
          Receive the latest updates straight to your inbox and personalised
          communication based on your interests.
        </p>
        <p className="text-xs">
          By clicking “CREATE MY PROFILE”, you confirm that you have
          acknowledged our Privacy Policy and Terms of Use, and would like to
          receive updates about Sneakss new activities, exclusive products,
          tailored services and to have a personalised client experience based
          on your interests, and that you want to create your Sneakss profile.
        </p>
        <input
          type="text"
          placeholder="Email address"
          className="outline-none h-12 w-full bg-[#f7f7f7] border-b-2 border-gray-400 text-sm text-gray-700 placeholder-gray-600"
        />
        <button className="bg-[#800000] h-14 mt-10 w-[40%] text-sm text-[#f7f7f7]">
          CREATE MY PROFILE
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
