import { useState } from "react";
import Newsletter from "./Newsletter";

const NewsletterHome = () => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <section className="h-52 flex flex-col gap-4 items-center justify-center text-white bg-[#222222]">
      <p className="text-base md:text-lg">Catch the latest styles before anyone else</p>
      <button
        className="h-12 w-36 flex justify-center font-semibold items-center text-sm bg-primaryRed text-white"
        onClick={() => setIsOpened(true)}
      >
        Sign Up
      </button>
      {isOpened && <Newsletter close={() => setIsOpened(!isOpened)} />}
    </section>
  );
};

export default NewsletterHome;
