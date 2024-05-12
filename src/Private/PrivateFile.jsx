
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateFile = ({children}) => {

    const {user , loading} = useContext(AuthContext) ;
    const location = useLocation() ;

    if(loading){
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-infinity loading-lg"></span>
    }

    if(user){
        return children ;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateFile;
