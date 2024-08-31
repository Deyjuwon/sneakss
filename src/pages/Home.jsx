import CollectionHome from "../components/CollectionHome"
import DiscountSection from "../components/DiscountSection"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import NewArrival from "../components/NewArrival"
import NewsletterHome from "../components/NewsletterHome"
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useEffect, useState } from 'react';
import Login from "./Login"


const Home = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();  // Cleanup subscription on unmount
  }, []);

  return (
    <div>
        <Header showSearchBar={true} />
        <div>
      {user ? <h1>Welcome, {user.displayName}</h1> : <Login />}
    </div>
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
