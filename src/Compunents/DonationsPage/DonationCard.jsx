import React from "react";
import { Link } from "react-router-dom";

const DonationCard = ({ donation }) => {
  const { id, category_bg, card_bg, text_color, button_bg, title, category ,image} =
    donation || {};
  const categoryBg = {
    backgroundColor: category_bg,
   
  };
  const textColor = {
    color:text_color
  }
  const categoryStyle = {
    ...categoryBg,
    ...textColor
  }
  return (
    <div>
      <Link to={`/donationdetails/${id}`}>
      <div className=" flex  flex-col rounded-xl shadow-md mr-4 mb-4 h-64 " style={categoryBg}>
        <div className=" overflow-hidden ">
       
        <img src={image} alt="" className="h-full w-full object-cover"/>
            
        
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between ">
            <p
              style={categoryStyle}
              className="block font-sans text-base font-medium   rounded-md px-2 py-1"
            >
              {category}
            </p>
           
          </div>
          <p style={textColor} className="font-sans text-base font-semibold ">
            {title}
            
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default DonationCard;
