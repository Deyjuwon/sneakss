import colImg1 from '../assets/sneak1.jpg';
import colImg2 from '../assets/sneak2.jpg';
import colImg3 from '../assets/sneak3.jpg';
import colImg4 from '../assets/sneak4.jpg';
import Button from './Button';
import { Link } from 'react-router-dom';


const CollectionHome = () => {
  return (
    <section className='flex-col flex md:flex-row flex-wrap '>
        <div className='w-full md:w-1/2  relative'>
            <img src={colImg1} alt="" className='h-700 brightness-90 hover:brightness-75 object-cover w-full' />
            <div className='absolute flex flex-col gap-5 left-10 text-white font-bold text-xl top-3/4'>
                <p className='text-base md:text-xl'>Check out the latest new balance</p>
                <Link to='/new'><Button title='shop' /></Link>
            </div>
        </div>
        <div className='w-full md:w-1/2 relative'>
            <img src={colImg2} alt="" className='h-700 brightness-90 hover:brightness-75 object-cover w-full' />
            <div className='absolute flex flex-col gap-5 left-10 text-white font-bold text-xl top-3/4'>
                <p className='text-base md:text-xl'>Women summer collections</p>
                <Link to='/women'><Button title='shop' /></Link>
            </div>
        </div>
        <div className='w-full md:w-1/2  relative'>
            <img src={colImg4} alt="" className='h-700 brightness-90 hover:brightness-75 object-cover w-full' />
            <div className='absolute flex flex-col gap-5 left-10 text-white font-bold text-xl top-3/4'>
                <p className='text-base md:text-xl'>Increase your gym steeze</p>
                <Link to='/new'><Button title='shop' /></Link>
            </div>
        </div>
        <div className='w-full md:w-1/2 relative'>
            <img src={colImg3} alt="" className='h-700 brightness-90 hover:brightness-75 object-cover w-full' />
            <div className='absolute flex flex-col gap-5 left-10 text-white font-bold text-xl top-3/4'>
                <p className='text-base md:text-xl'>There is definitely a fit that suits your style</p>
                <Link to='/new'><Button title='shop' /></Link>
            </div>
        </div>
    </section>
  )
}

export default CollectionHome
