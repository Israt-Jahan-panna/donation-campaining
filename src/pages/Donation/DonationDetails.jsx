import React from "react";

const DonationDetails = ({ donation }) => {
    console.log(donation);
  const {
    id,
    price,
    category_bg,
    card_bg,
    text_color,
    button_bg,
    title,
    category,
    image
  } = donation || {};

  const categoryBg = {
    backgroundColor: category_bg,
  };
  const buttonBg = {
    backgroundColor: text_color,
  };
  const textColor = {
    color: text_color,
  };
  const categoryStyle = {
    ...categoryBg,
    ...textColor,
  };
  return (
    <div>
 <figure className="relative h-full w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://i.ibb.co/2yCDV2w/Food.png"
        alt=""
      />
      <figcaption className="absolute bottom-0 left- w-full   border border-white bg-transparent py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <button  className="h-9  " style={buttonBg}>
            Donation $ {price}
          </button>
        </div>
        
      </figcaption>
    </figure>
    <div className="mt-16">
        <h1 className="font-bold text-4xl">Healthy Snack {title}</h1>
        <p className="text-base mt-6 mb-28">Description:Give your child the gift of health with our selection of wholesome and tasty snacks. These treats are not only delicious but also packed with essential nutrients to keep your little one energized and strong. From crunchy fruits to nutty delights, our healthy snacks are the perfect companions for busy days and active playtimes.</p>
    </div>
       
    </div>
  );
};

export default DonationDetails;
