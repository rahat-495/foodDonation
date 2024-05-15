
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Lottie from "lottie-react";
import animation from '../../public/loading.json' ;

const PrivateFile = ({children}) => {

    const {user , loading} = useContext(AuthContext) ;
    const location = useLocation() ;

    if(loading){
        return <Lottie className="w-80 h-80 min-h-screen flex items-center justify-center relative left-1/2 -translate-x-1/2" animationData={animation} loop={true}/>;
    }

    if(user){
        return children ;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateFile;
