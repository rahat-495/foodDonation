
import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import FeaturedFood from "./FeaturedFood";
import Volentiear from "./Volentiear";
import Social from "./Social";

const Home = () => {
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
