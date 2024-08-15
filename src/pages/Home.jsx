import CollectionHome from "../components/CollectionHome"
import DiscountSection from "../components/DiscountSection"
import Header from "../components/Header"
import Hero from "../components/Hero"
import NewArrival from "../components/NewArrival"
import NewsletterHome from "../components/NewsletterHome"


const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <CollectionHome />
        <DiscountSection />
        <NewArrival />
        <NewsletterHome />
      
    </div>
  )
}

export default Home
