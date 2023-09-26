import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    
  const {id} =useParams();
  
const donations = useLoaderData();

    const donation = donations.find((donation)=>donation.id==id)
    console.log(donation)
    const {title , price , description , category ,image ,price_button_bg} = donation;

    const btnBg={
        backgroundColor: price_button_bg,
    }
  return (
    <div>
        
        <div>
 <figure className="relative h-full w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={image}
        alt=""
      />
      <figcaption className="absolute bottom-[52px] rounded-sm  w-full   border border-white bg-black opacity-25 py-16 px-6 shadow-lg ">
       
      </figcaption>
      <div>
          <Link to={`/donations/${id}`}>
          <button 
             style={btnBg}  className="flex s rounded-lg py-3 px-4  font-sans text-lg font-bold text-white relative left-[40px] bottom-[110px]"
              type="button"
            >
             Donate ${price}
              
            </button>
          </Link>
        </div>
    </figure>
    
    <div className="mt-16">
        <h1 className="font-bold text-4xl"> {title}</h1>
        <p className="text-2xl mt-6 mb-28"> {description}</p>
    </div>
       
    </div>
       
    </div>
  );
};

export default DonationDetails;
