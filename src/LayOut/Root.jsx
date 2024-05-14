
import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Root = () => {
    return (
        <div className="overflow-x-hidden">
            <div className="mx-auto"><Nav></Nav></div>
            <div className="max-w-[1440px] mx-auto"><Outlet></Outlet></div>
            <div className=""><Footer></Footer></div>
        </div>
    );
};

export default Root;
