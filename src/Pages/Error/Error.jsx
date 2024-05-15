
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center gap-5">
            <img className="" src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?size=626&ext=jpg&ga=GA1.1.28443682.1714207090&semt=ais_user" alt="" />
            <p className="gro text-3xl font-semibold text-center">Page Not Found</p>
            <p className="text-xl gro text-center">Oops! Looks like you have stumbled upon uncharted territory.</p>
            <Link to={'/'}>
                <Button>Go Back</Button>
            </Link>
        </div>
    );
};

export default Error;
