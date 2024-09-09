import { useEffect } from "react"
import CollectionHome from "../components/CollectionHome"
import DiscountSection from "../components/DiscountSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import NewArrival from "../components/NewArrival"
import NewsletterHome from "../components/NewsletterHome"

const Home = () => {
  useEffect(() => {
    window.scrollTo(0,0);
}, [])
  return (
    <div>
        <Header showSearchBar={true} />
        
        <Hero />
        <CollectionHome />
        <DiscountSection />
        <NewArrival />
        <NewsletterHome />
        <Footer bgColor='white' textColor='black' />
        
    </div>
  )
}

export default Home
