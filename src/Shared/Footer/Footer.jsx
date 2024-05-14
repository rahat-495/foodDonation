
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>

      <footer className="footer p-10 bg-base-200 text-base-content">
        
        <div className="footer pop lg:mx-auto lg:ml-[160px] p-10 bg-base-200 text-base-content">

        <aside>
            <img className="w-20 h-20 rounded-full" src="https://img.freepik.com/premium-vector/fresh-food-logo-food-share-logo-design-template_664675-595.jpg" alt="" />
            <p>Feast Forward<br/>Providing reliable tech since 1992</p>
        </aside> 

          <nav className="my-3">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Artisanal Creations</a>
            <a className="link link-hover">Custom Designs</a>
            <a className="link link-hover">Decor Inspiration</a>
            <a className="link link-hover">Home Styling</a>
          </nav>

          <nav className="my-3">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>

          <nav className="my-3">
            <h6 className="footer-title">Contact Information</h6>
            <a className="">Level-6, 43, Anawal Centre, Basundara, Dhaka</a>
            <a className="link link-hover">Support : md8702687@gmail.com</a>
            <a className="">Helpline : 01826484912</a>
            <a className="">(Available : Sat - Thu, 10:00 AM To 7:00 PM)</a>
          </nav>

        </div>

      </footer>

      <footer className="footer px-20 lg:px-60 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <p className="font-semibold text-lg gro">
            Feast Forward  <br />Copyright © 2024 - All Right Reserved
          </p>
        </aside>

        <nav className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="#" className="text-2xl cursor-pointer">
              <FaTwitter />
            </a>
            <a href="#" className="text-2xl cursor-pointer">
              <FaYoutube />
            </a>
            <a href="#" className="text-2xl cursor-pointer">
              <FaFacebookF />
            </a>
          </div>
        </nav>
      </footer>

    </div>
  );
};

export default Footer;
