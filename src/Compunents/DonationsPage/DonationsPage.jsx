import DonationCard from "./DonationCard"
const DonationsPage = ({donations}) => {
  
    console.log(donations)
    return (
        <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 py-20">
            
                {
                    donations ?.map(donation=> <DonationCard key={donation.id} donation={donation}></DonationCard>)
                }
           
        </div>
    );
};

export default DonationsPage;