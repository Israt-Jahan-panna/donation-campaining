import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Donations from "../pages/Donations/Donations"
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
// import Donation from "../pages/Donation/Donation";
import DonationDetails from "../pages/Donation/DonationDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader: ()=> fetch('/donation.json')
            },

            {
                path:"/donationdetails/:id",
                element:<DonationDetails></DonationDetails>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path:"/donations",
                element:<Donations></Donations>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path:"/statistics",
                element:<Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;