import React from "react";

const DonationCard = ({ donation }) => {
  const { id, category_bg, card_bg, text_color, button_bg, title, category ,picture} =
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
      <div className="relative flex w-80 flex-col rounded-xlshadow-md">
        <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl">
       
        <img src={picture} alt="" className="h-full w-full object-cover"/>
            
        
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between ">
            <p
              style={categoryStyle}
              className="block font-sans text-base font-medium   rounded-xl p-4"
            >
              {category}
            </p>
           
          </div>
          <p style={textColor} className="block font-sans text-sm font-normal ">
            {title}
            
          </p>
        </div>
        {/* <div className="p-6 pt-0">
          <button
            className="block w-full select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Favorite
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default DonationCard;
