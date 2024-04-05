
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp ,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import Banner from '../../assets/footer.png'
import footerLogo from "../../assets/logo.png"
import { Link } from "react-router-dom";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Matches",
    link: "/matches",
  },
  {
    title: "Sponsors",
    link: "/sponsors",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
];
const Footer = () => {
  return (
    <div style={BannerImg} className="text-black dark:text-white md:pt-60 dark:bg-black">
      <div className="container flex flex-row items-center justify-center">
        <div data-aos="flip-up" className="grid md:grid-cols- pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl  text-sm font-bold sm:text-left text-justify mb-3 flex items-center font-serif">
              <img src={footerLogo} alt="" data-aos="fade-up"  data-aos-anchor-placement="top-bottom"  className="max-w-[80px]" />
              TauntonIndian CricketClub
            </h1>
            <p>
              We are a friendly, sociable and inclusive cricket club. If you have any queries or would like to join, then please get in touch with us today
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 text-black">
            <div>
              <div className="py-8 px-4"> 
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 dark:text-white">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black dark:text-white"
                      key={link.title}
                    ><Link to={link.link}>
                      <span>{link.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* social links */}

            <div> 
              <div className="flex items-center gap-3 mt-6 ">
                <a href="https://www.instagram.com/ticc_ticc/">
                  <FaInstagram className="text-3xl md:text-black dark:text-white hover:text-purple-600" />
                </a>
                <a href="https://www.facebook.com/people/Ticc-Cricket-Club/pfbid024SQjGTTm56WaREACWgEnaci8xky3gRqoNn9p3TSTKPfMmy6MZPhCmwiaMGTPMSiNl/">
                  <FaFacebook className="text-3xl md:text-black  dark:text-white hover:text-blue-700" />
                </a>
                <a href="#">
                  <FaWhatsapp className="text-3xl md:text-black  dark:text-white hover:text-green-800" />
                </a>
                <a href="https://www.youtube.com/@TauntonIndianCricketClub">
                  <IoLogoYoutube  className="text-3xl md:text-black  dark:text-white hover:text-red-700" />
                </a>
              </div>
              <div className="mt-6 dark:text-white">
                <div className="flex items-center gap-3  md:text-black dark:text-white">
                  <FaLocationArrow />
                  <p>Ya Taunton, Somerset, England..</p>
                </div>
                <div className="flex items-center gap-3 mt-3  md:text-black dark:text-white">
                  <FaMobileAlt />
                  <p>+44 7440242622</p>
                </div>
                <div className="flex items-center gap-3 mt-3  md:text-black dark:text-white">
                  <MdOutlineAttachEmail />
                  <p>contactus@tauntonindiancricketclub.com</p>
                </div>
              </div>
            </div>
          </div>
          <p className=" md:text-black"><span>©️ </span>A2ZAlphabetSolutionzPrivateLimited</p>
        </div>
       
      </div>
    </div>
  );
};

export default Footer;
