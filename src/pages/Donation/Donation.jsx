import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDonation from './CardDonation';
import DonationDetails from './DonationDetails';


const Donation = () => {
    const [donation ,setDonation] = useState();
    const {id} = useParams();
    const donations = useLoaderData();
    useEffect (()=> {
        const findDonation = donations?. find(donation=>donation.id ===id )
        setDonation(findDonation);
    },[id,donations])
    return (
        <div>
            <CardDonation donation={donation}></CardDonation>
            {/* <DonationDetails donation={donation}></DonationDetails> */}
        </div>
    );
};

export default Donation;