import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import swal from "sweetalert";

const DonationDetails = () => {
  
  const {id} =useParams();
  
const donations = useLoaderData();

    const donation = donations.find((donation)=>donation.id==id)
    // console.log(donation)
    const {title , price , description , category ,image ,price_button_bg} = donation;

    const btnBg={
        backgroundColor: price_button_bg,
    }




  const handleDonations= () => {
    const addedDonationArray = [];
    const donationItems = JSON.parse(localStorage.getItem('donations'))
    //when value is emty in this time it will set
    if(!donationItems){
      addedDonationArray.push(donation)
      localStorage.setItem('donations' ,JSON.stringify(addedDonationArray))
      swal("Thanks you we receive your contributions ", "Your kindness shines bright in every heart you touch", "success");
    }
    else{
      addedDonationArray.push(...donationItems,donation)
      localStorage.setItem('donations' ,JSON.stringify(addedDonationArray))
      swal("Thank you we receive your contributions ", "Your kindness shines bright in every heart you touch", "success");
    }


    
    // localStorage.setItem('key' , JSON.stringify( [{name: "idrat"} ,{age: '33'}]))
  }
      
  return (
    <div>
        
        <div>
 <figure className="relative h-full w-full">
      <img
        className="h-full w-full rounded-md object-cover object-center"
        src={image}
        alt=""
      />
      <figcaption className="absolute bottom-[52px] rounded-sm  w-full   border border-white bg-black opacity-25 py-16 px-6 shadow-lg ">
       
      </figcaption>
      <div>
          <Link to={`/donations`}>
          <button 
           onClick={handleDonations}
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
