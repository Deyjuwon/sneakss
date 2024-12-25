import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const NewProductCard = ({ shoeName, shoeColor, shoeGender, shoePrice, shoeImg, ProductID }) => {
  return (
    <Link to={`/product/${ProductID}`}>
      <div className="p-2 md:p-4 cursor-pointer md:min-h-80 flex flex-col gap-1 md:gap-3 text-sm border border-transparent hover:border-primaryRed w-full md:w-fit">
        <img className="h-[170px] min-w-[150px] md:h-52 md:min-w-56 object-cover" src={shoeImg} alt="" />
        <p className="font-bold">{shoeName}</p>
        <div className="flex flex-col gap-0">
          <p>{shoeColor}</p>
          <p>{shoeGender}</p>
        </div>
        <p className="font-bold">₦{shoePrice.toLocaleString()}</p>
      </div>
    </Link>
  );
};

export default NewProductCard;
