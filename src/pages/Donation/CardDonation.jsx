import React from "react";

const CardDonation = ({ donation }) => {
  const {
    id,
    price,
    category_bg,
    card_bg,
    text_color,
    button_bg,
    title,
    category,
    picture_for_page,
  } = donation || {};


  const categoryBg = {
    backgroundColor: category_bg,
   
  }
  const buttonBg ={
    backgroundColor: text_color,
  }
  const textColor = {
    color:text_color
  }
  const categoryStyle = {
    ...categoryBg,
    ...textColor
  }

  const handelViewDetails = () =>{
    
  }
  return (
    <div>
      <div style={categoryBg} className="relative flex w-full max-w-[40rem] flex-row rounded-xl  shadow-md ">
        <div className="relative m-0   overflow-hidden rounded-xl rounded-r-none">
          <img src={picture_for_page} className="h-full w-full object-cover" />
        </div>
        <div className="p-6 ">
          <h6 style={categoryStyle} className=" w-24 py-2 px-4 rounded-md mb-4 block font-sans text-base font-semibold ">
            {category}
          </h6>
          <h4 className="mb-2 block font-sans text-2xl font-semibold  ">
            {title}
          </h4>
          <h4 style={textColor} className="mb-2 block font-sans text-2xl font-semibold  ">
            ${price}
          </h4>
          
          <a className="inline-block" href="#">
            <button onClick={handelViewDetails}
             style={buttonBg}  className="flex select-none rounded-lg py-3 px-4  font-sans text-lg font-bold text-white  disabled:shadow-none"
              type="button"
            >
             View Details
              
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDonation;
