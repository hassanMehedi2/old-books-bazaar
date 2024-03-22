import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-5">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default MainLayout;