import { useEffect, useState } from "react";
import CardDonation from "../Donation/CardDonation";

const Donations = () => {
  const [donations, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);

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
    <div>
      {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
            <div>
                {
                    donations.map(donation => <CardDonation key={donation.id} donation={donation}></CardDonation>)
                }
            </div>
        </div>
      )}
    </div>
  );
};

export default Donations;
