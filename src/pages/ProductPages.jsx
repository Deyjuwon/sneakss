import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import base from '../api/base';
import Spinner from '../components/Spinner';
import Header from '../components/Header';
import RandomProducts from '../components/RandomProducts';
import Footer from '../components/Footer';

const ProductPages = () => {
  const { id } = useParams(); // Get product ID from URL (which is fields.ProductID)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null); // State to track the selected size

  // Define size options based on product category
  const getSizeOptions = (category) => {
    switch (category) {
      case 'Men':
        return [40, 41, 42, 43, 44, 45];
      case 'Women':
        return [37, 38, 39, 40, 41, 42];
      case 'Unisex':
        return [38, 39, 40, 41, 42, 43, 44];
      default:
        return [];
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Filter or find product using fields.ProductID in Airtable
    base('products')
      .select({
        filterByFormula: `{ProductID} = "${id}"`, // Airtable formula to find by ProductID
      })
      .firstPage()
      .then((records) => {
        if (records.length > 0) {
          setProduct(records[0].fields); // Assuming only one product is returned
        } else {
          setError('Product not found.');
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Error fetching product details.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  const sizeOptions = getSizeOptions(product.Category);

  return (
    <div>
      <div className="pt-32 md:pt-24 ">
        <Header showSearchBar={true} />
        <div className='w-[80%] m-auto flex gap-6 items-center pt-10'>
          <img src={product.ProductImage[0].url} alt="" className='w-[50%] h-[520px] object-cover' />
          <div className='w-[50%] flex flex-col gap-5'>
            <p className='text-xs'>{product.Category}</p>
            <h1 className='font-bold text-[42px] text-[#222222]'>{product.ProductName}</h1>
            <p className='font-semibold text-[20px]'>₦{product.Price.toLocaleString()}</p>
            <p className='text-base'>Color:  <span className='text-[#808080]'>{product.Color}</span></p>
            <div className='flex flex-col gap-5'>
              <p className='text-[#808080] text-sm'>Size</p>
              <div className='flex gap-5'>
                {sizeOptions.map((size) => (
                  <input
                    key={size}
                    type="button"
                    value={size}
                    className={`h-[40px] w-[60px] border border-gray-400 hover:bg-[#222222] hover:text-[#f7f7f7] cursor-pointer ${
                      selectedSize === size ? 'bg-[#222222] text-[#f7f7f7]' : 'bg-[#f7f7f7]'
                    }`}
                    onClick={() => setSelectedSize(size)} // Set the selected size on click
                  />
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-5'>
              <p className='text-[#808080] text-sm'>Quantity</p>
              <div className='text-base font-semibold border border-gray-400 w-[30%] h-[50px] flex justify-around items-center'>
                <button className='cursor-pointer' onClick={() => setQuantity((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))}>-</button>
                <p>{quantity}</p>
                <button className='cursor-pointer' onClick={() => setQuantity((prevCount) => prevCount +1)}>+</button>
              </div>
            </div>
            <button className="mt-4 border border-gray-400 text-black h-[50px] w-[80%] flex items-center justify-center hover:text-[#f7f7f7] hover:bg-[#222222]">
              Add to Cart
            </button>
          </div>
        </div>
        <div className="pt-20">
          <p className="text-[22px] font-bold px-5">You might also like</p>
          <RandomProducts />
        </div>
      </div>
      <Footer bgColor='222222' textColor='white' />
    </div>
  );
};

export default ProductPages;
