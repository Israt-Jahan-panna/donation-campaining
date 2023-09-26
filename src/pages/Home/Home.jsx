import { useLoaderData } from "react-router-dom";
import Banner from "../../Compunents/Header/Banner/Banner";
import DonationsPage from "../../Compunents/DonationsPage/DonationsPage";


const Home = () => {

const donations = useLoaderData();
// console.log(donations)


    return (
        <div>
            <Banner></Banner>
            <div>
           <DonationsPage donations={donations}></DonationsPage>
            </div>
        </div>
    );
};

export default Home;