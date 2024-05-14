
import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    withCredentials : true ,
})

const useAxiosSecure = () => {

    const {logOut} = UseAuth() ;
    const navigate = useNavigate() ;

    axiosSecure.interceptors.response.use((response) =>{
        return response
    } , (error) => {
        console.log(error.response.status);
        if( error.response.status === 401 || error.response.status === 403 ){
            logOut() ;
            navigate('/login') ;
        }
    })

    return axiosSecure ;
};

export default useAxiosSecure;
