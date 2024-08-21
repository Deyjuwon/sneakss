import heroImg from '../assets/sneakerHero.jpg';
import Button from './Button';

const Hero = () => {
  return (
    <div className='relative w-full min-w-full'>
      <div className='w-full'>
        <img src={heroImg} className='h-screen w-full object-cover brightness-50 md:brightness-75' alt="" />
      </div>

      <div className='flex flex-col gap-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:top-2/3 lg:left-72'>
        <h1 className='text-4xl'>Ready, Set, Sneak</h1>
        <div className='border-2 border-primaryRed w-1/2'></div>
        <p className='text-base'>Change your sneakers game this year!</p>
        <div className='flex gap-4'>
          <Button title='shop men' />
          <Button title='shop women' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
