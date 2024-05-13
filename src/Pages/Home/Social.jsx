
import { Button } from "@material-tailwind/react";
import { FaInstagramSquare , FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Social = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-10 my-20 mx-5 lg:mx-0 xl:mx-0">
            <h1 className="text-3xl xl:text-5xl font-semibold gro mb-10 text-center">Social Media Integration</h1>
            <div className="max-w-[1440px] flex items-center justify-center border p-5 rounded-lg flex-col shadow-lg xl:flex-row gap-10 xl:justify-between">
                <img className="w-auto xl:w-1/2" src="https://media.licdn.com/dms/image/C5612AQHo0ca-rv3Vdg/article-cover_image-shrink_600_2000/0/1520082144593?e=2147483647&v=beta&t=ipUiP-QIk9wdF-5BdGyt9XW26_waZnxJqVwiBaJvz0M" alt="" />
                <div className="w-auto text-center xl:w-1/2 xl:text-left">
                    <h1 className="gro text-4xl font-semibold mb-8">We Are Also Connected With</h1>
                    <div className="flex items-center justify-center gap-5 mb-12">
                        <FaFacebookSquare className="text-3xl cursor-pointer"/>
                        <FaInstagramSquare className="text-3xl cursor-pointer"/>
                        <FaTelegram className="text-3xl cursor-pointer"/>
                    </div>
                    <p className="gro mb-10 text-lg">Stay connected with us on social media to see how your support is making a difference in the fight against hunger! Follow us for updates, impact stories, and ways to get involved in our mission to provide nutritious meals to those in need. Together, we can make a positive change in our community. #FoodDonation #FightHunger #GiveBack</p>
                    <Button className="w-full xl:w-auto">More About</Button>
                </div>
            </div>
        </div>
    );
};

export default Social;
