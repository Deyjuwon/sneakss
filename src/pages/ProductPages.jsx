import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import base from '../api/base';
import Spinner from '../components/Spinner';

const ProductPages = () => {
  const { id } = useParams(); // Get product ID from URL (which is fields.ProductID)
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Filter or find product using fields.ProductID in Airtable
    base('products')
      .select({
        filterByFormula: `{ProductID} = "${id}"`,  // Airtable formula to find by ProductID
      })
      .firstPage()
      .then((records) => {
        if (records.length > 0) {
          setProduct(records[0].fields);  // Assuming only one product is returned
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

  return (
    <div>
      {product ? (
        <>
          <h1>{product.ProductName}</h1>
          <img src={product.ProductImage[0].url} alt={product.ProductName} />
          <p>Price: {product.Price}</p>
          <p>Category: {product.Category}</p>
          <p>Color: {product.Color}</p>
          <button className="mt-4 bg-[#800000] text-white px-6 py-2">Add to Cart</button>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductPages;