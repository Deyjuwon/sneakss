import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();  // Cleanup subscription on unmount
  }, []);
  return (
    <>
    <div>
        {user ? <h1>Welcome, {user.displayName}</h1> : <Login />}
      </div>
    <Routes>
        
        <Route  path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App
