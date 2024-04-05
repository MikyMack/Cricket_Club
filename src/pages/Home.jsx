import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar/Navbar";
import About from "../components/About/About";
import Results from "../components/Results/Results";
import Footer from "../components/Footer/Footer";
import Location from "../components/Location/Location";
import Swiper from "../components/Swiper/Swiper";
import Experience from "../components/Experience/Experience";
import Announcemnts from "../components/Announcement/Announcemnts";
import videobg from "../assets/videos/video-bg.mp4";
import resultbg from "../assets/matchResults-bg.png"
import { Link } from "react-router-dom";
import axios from "axios";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { MdOutlineAttachEmail } from "react-icons/md";
import {
  List,
  ListItem,
  ListItemPrefix,
  Card,
  Typography,
} from "@material-tailwind/react";


export default function Home() {
  const [sponsorLogo, setSponsorLogo] = useState([])

  useEffect(() => {
    async function fetchLogo() {
      try {
        const response = await axios.get('https://admin.tauntonindiancricketclub.com/api/partners');
        if (response.data && response.data.partners) {
          setSponsorLogo(response.data.partners);
          console.log(sponsorLogo);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchLogo();
  }, []);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
 

  return (
    <div className=" dark:bg-black w-full overflow-x-hidden">
      <Navbar theme={theme} setTheme={setTheme} />
      <img src={resultbg} alt='bg' className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className="md:pt-36">
        <div className="dark:bg-gray-950 dark:text-white duration-300 mt-0 sm:mt-0">
          <div className="container min-h-[520px] flex sm:flex-col mt-10 sm:mt-0">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">

              <div data-aos="zoom-in" className="order-1 sm:order-2 relative">
                <video
                  src={videobg}
                  autoPlay
                  loop
                  muted
                  className="md:w-full w-70% pt-20 object-contain"
                />
              </div>

              <div className="space-y-5 order-2 sm:order-1 xl:pr-40">
                <h1
                  data-aos="fade-up"
                  className="text-4xl sm:text-5xl font-semibold"
                  style={{ lineHeight: 1.2 }}
                >
                  <span className="text-1xl text-gray-900 font-serif"> Welcome To </span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-900 to-blue-900 hover:bg-gradient-to-r font-serif">
                    Taunton Indian Cricket Club
                  </span>
                </h1>
                <p data-aos="fade-up" data-aos-delay="300">
                  We are a friendly, sociable, and inclusive cricket club. If you have any queries or would like to join, please get in touch with us today.
                </p>
                <Link to='/about'>
                  <button
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-offset="0"
                    className="primary-btn rounded-lg bg-blue-500 text-white p-2"
                  >
                    Contact Now
                  </button>
                </Link>
                <h2 data-aos="fade-up" className="font-semibold pt-10 text-xl sm:text-xl text-center dark:text-white font-serif bg-clip-text text-transparent bg-gradient-to-r from-black to-blue-900">
                    Our Official sponsors :-
                  </h2>
                {sponsorLogo.map((data,index)=>(
                  <div key={index} className="flex flex-row items-center justify-center">
                         
                  <img data-aos="fade-up" className="w-40 sm:w-56 h-auto" src={`https://admin.tauntonindiancricketclub.com/uploads/testmonial/${data.image}`} alt="hii" />
                </div>
                ))}
              </div>
            </div>




          </div>
        </div>
      </div>

      <Announcemnts />
      <Swiper />
      <About />
      <Results />
      
      <Experience />
      <Location />
      <div data-aos="fade-up" className="flex flex-col items-center justify-center pt-10 md:flex-row md:items-center md:justify-center">
        <h1 className="font-bold text-4xl md:pr-2 text-center dark:text-white">Affiliated to:</h1>
        <h2 className="text-2xl font-semibold mt-2 md:pt-0 text-center dark:text-white">
          &quot;Somerset Cricket County and England Cricket Board.&quot;
        </h2>
      </div>
      <div>
            <h1
              data-aos="flip-right" data-aos-easing="ease-out-cubic"  data-aos-duration="1000"
              className="ml-36 border-l-8 mb-8 mt-6 border-primary/50 py-2 text-3xl font-semibold dark:text-white font-serif dark:bg-black"
            >
              Contact Us...
            </h1>
            <div className='lg:mb-10' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <Card className="w-full ">
                <List className='flex flex-col md:flex-row items-center justify-center'>
                  <a href='https://www.facebook.com/people/Ticc-Cricket-Club/pfbid024SQjGTTm56WaREACWgEnaci8xky3gRqoNn9p3TSTKPfMmy6MZPhCmwiaMGTPMSiNl/'>
                    <ListItem className='hover:text-blue-800'>
                      <ListItemPrefix>
                        <FaFacebook className='w-[50px] h-[50px] ' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Facebook
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                  <a href='https://www.instagram.com/ticc_ticc/'>
                    <ListItem className='hover:text-purple-600'>
                      <ListItemPrefix>
                        <FaInstagram className='w-[50px] h-[50px]' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Instagram
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                  <a href='mailto:contactus@tauntonindiancricketclub.com'>
                    <ListItem className=''>
                      <ListItemPrefix>
                        <MdOutlineAttachEmail className='w-[50px] h-[50px] mr-8' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Gmail
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                  <a href='https://wa.me/447440242622'>
                    <ListItem className='hover:text-green-800'>
                      <ListItemPrefix>
                        <FaWhatsapp className='w-[50px] h-[50px]' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          WhatsApp
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                  <a href='https://www.youtube.com/@TauntonIndianCricketClub'>
                    <ListItem className='hover:text-red-800'>
                      <ListItemPrefix>
                        <IoLogoYoutube className='w-[50px] h-[50px]' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Youtube
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                
                </List>
              </Card>
            </div>

          </div>

      <Footer />
    </div>
  );
}
