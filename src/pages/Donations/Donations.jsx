import { useEffect, useState } from "react";
import CardDonation from "../Donation/CardDonation";

const Donations = () => {
  const [donations, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
    const [isShow , setIsShow] =useState(false)
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No data found no worries please select your donation item  ");
    }
  }, []);
  console.log(donations);
  return (
    <div className=" mx-24 mt-28">
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
            {
                   isShow ?  donations.map(donation => <CardDonation key={donation.id} donation={donation}></CardDonation>) :

                   donations.slice(0,4).map(donation => <CardDonation key={donation.id} donation={donation}></CardDonation>)
                }
            </div>
            {donations.length > 4 && <button onClick={()=>setIsShow(!isShow)} className=" mt-7 py-2 px-3 text-white bg-green-500 rounded-lg mx-auto block ">{isShow ? "See Less" : "See All"}</button>}
        </div>
      )}
    </div>
  );
};

export default Donations;
