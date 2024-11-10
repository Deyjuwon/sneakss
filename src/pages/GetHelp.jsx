import Header from "../components/Header"
import Footer from "../components/Footer"
const GetHelp = () => {
  return (
    <div className="pt-32 md:pt-24">
      <Header showSearchBar={true} />
      <div className="flex flex-col justify-center items-center gap-10 pt-10">
        <p className="text-3xl font-semibold">GET HELP</p>
        <input className="h-20 w-[30%] border border-gray-400 rounded-xl" type="text" />
      </div>
      <div className="pt-20  px-5">
          <p className="text-2xl font-medium">Contact Us</p>
          <p className="pb-5">Wait times may be longer than usual due to high contact volume. Thanks for your patience.</p>
          <hr />
        </div>
      <Footer bgColor='white' textColor='black' />
      
      
    </div>
  )
}

export default GetHelp
