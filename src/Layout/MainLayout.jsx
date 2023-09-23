import { Outlet } from "react-router-dom";
import Navbar from "../component/Header/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>          
           <div className="py-10">
           <Outlet></Outlet>
           </div>
        </div>
    );
};

export default MainLayout;