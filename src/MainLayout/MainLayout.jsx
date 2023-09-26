import { Outlet } from "react-router-dom";
import NavBar from "../Compunents/Header/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div className="max-w-[1600px] mx-auto">
            <NavBar></NavBar>
            <div className="mt-20">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;