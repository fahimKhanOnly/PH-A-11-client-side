import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';


const Footer = () => {
  return (
    <footer className="bg-[#0000001A] mt-14 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          <div className="w-full md:w-1/3 md:pr-3 mb-6 md:mb-0">
            <div className="mb-5">
            <Link to="/" className="flex items-center gap-1 sm:gap-4"><img className='w-32 sm:w-40' src={logo}/></Link>
            </div>

            <div className="w-full mb-6 md:mb-0">
              <h2 className="text-lg font-semibold mb-4">About Us</h2>
              <p className="">HistoriX connects you to the world of historical artifacts, preserving the past and making it accessible for all history enthusiasts.</p>
            </div>
          </div>

          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li><Link to="/allVisas" href="#services" className="hover:underline "></Link></li>
              <li><Link href="#" className="hover:underline">FAQs</Link></li>
              <li><Link href="#" className="hover:underline">Contact Us</Link></li>
            </ul>
          </div>

          
          <div className="w-full flex flex-col justify-center md:w-1/3">
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm">Email: support@historiex.com</p>
            <p className="text-sm">Phone: +3 (234) 5723-8870</p>
            <p className="text-sm">Address: 89/34 History Road, Dhaka, Bangladesh</p>
            <div className="mt-5">
              <h2 className="text-lg font-semibold mb-4">Socials</h2>
              <div className="flex w-fit justify-center mt-2 gap-5">
                <a className="text-2xl" href="https://www.facebook.com/" target="_blank"><FaFacebook></FaFacebook></a>
                <a className="text-2xl" href="https://www.linkedin.com/" target="_blank"><FaLinkedin></FaLinkedin></a>
                <a className="text-2xl" href="https://x.com/" target="_blank"><BsTwitterX></BsTwitterX></a>
              </div>
            </div>
          </div>
        </div>

        <div className="divider pt-4"></div>
        <div className="text-center pt-4">
          <p className="text-sm">© 2025 HistoriX. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
