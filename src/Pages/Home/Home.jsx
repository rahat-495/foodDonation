
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFood from "./FeaturedFood";
import Volentiear from "./Volentiear";
import Social from "./Social";
import { useEffect, useState } from "react";
import axios from "axios";
import UseAuth from "../../Hooks/UseAuth";

const Home = () => {

    const [data , setDate] = useState([]) ;
    const [loading2 , setLoading] = useState(false) ;
    const {loading} = UseAuth() ;

    useEffect(() => {
        setLoading(true) ;
        axios.get(`https://assignment11server-omega.vercel.app/featuredFoods`)
        .then(res => {
            setDate(res.data) ;
            setLoading(false) ;
        })
    } , [])

    if(loading || loading2){
        console.log(data);
        return <span className="loading min-h-[100vh] mx-auto min-w-[20%] flex items-center justify-center loading-ring loading-lg"></span> ;
    }

    return (
        <div>
            <Helmet>
                <title>
                Feast Forward || Home
                </title>
            </Helmet>
            <div className=""><Banner></Banner></div>
            <div className=""><FeaturedFood></FeaturedFood></div>
            <div className=""><Social></Social></div>
            <div className=""><Volentiear></Volentiear></div>
        </div>
    );
};

export default Home;
