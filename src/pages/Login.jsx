import { useContext } from 'react';
import Header from '../components/Header';
import { FcGoogle } from "react-icons/fc";
import { auth, provider } from '../../firebaseConfig';
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import Footer from '../components/Footer';

const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // Store the user info in the context
        setUser(user);
        console.log('Login successful', user);
        navigate('/');
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };

  return (
    <div className='h-screen flex flex-col justify-between pt-40'>
      <Header showSearchBar={false} />
      <div className='flex flex-col gap-16 justify-center items-center'>
        <p className='text-[40px] font-normal'>MY SNEAKS ACCOUNT</p>
        <button 
          className='h-20 w-[400px] bg-[#ff5f5f7] text-[#800000] border border-[#800000] 
          text-base font-semibold hover:bg-[#800000] hover:text-[#f5f5f7] flex justify-center items-center gap-4' 
          onClick={handleLogin}>
          <FcGoogle size={25} />
          <p>CONTINUE WITH GOOGLE</p>
        </button>
      </div>
      <Footer bgColor='black' textColor='white' />
    </div>
  );
}

export default Login;
