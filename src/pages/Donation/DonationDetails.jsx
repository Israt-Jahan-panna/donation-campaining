import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const DonationDetails = () => {
    
  const {id} =useParams();
  
const donations = useLoaderData();

    const donation = donations.find((donation)=>donation.id==id)
    console.log(donation)
    const {title , price , description , category ,image} = donation;
  return (
    <div>
        
        <div>
 <figure className="relative h-full w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src={image}
        alt=""
      />
      <figcaption className="absolute bottom-0 left- w-full   border border-white bg-transparent py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Link to={`/donations/${id}`}>
          <button  className="h-9  " >
            Donation $ {price}
          </button>
          </Link>
        </div>
        
      </figcaption>
    </figure>
    <div className="mt-16">
        <h1 className="font-bold text-4xl"> {title}</h1>
        <p className="text-base mt-6 mb-28"> {description}</p>
    </div>
       
    </div>
       
    </div>
  );
};

export default DonationDetails;
