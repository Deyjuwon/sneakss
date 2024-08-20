const NewProductCard = ({ shoeName, shoeColor, shoeGender, shoePrice, shoeImg }) => {
  return (
    <div className="p-4 cursor-pointer min-h-80 flex flex-col gap-3 text-sm border border-transparent hover:border-primaryRed">
      <img className="h-52 min-w-56 object-cover" src={shoeImg} alt="" />
      <p className="font-bold">{shoeName}</p>
      <div className="flex flex-col gap-0">
        <p>{shoeColor}</p>
        <p>{shoeGender}</p>
      </div>
      <p className="font-bold">{shoePrice}</p>
    </div>
  );
};

export default NewProductCard;
