import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import abut from "../assets/own/t20.jpg";
import profile from "../assets/own/profile.jpg";
import officials from '../assets/own/image.png';
import resultbg from "../assets/matchResults-bg.png"
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
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useEffect } from 'react';
import AOS from "aos";

const data = [{
  image: profile,
  name: "Santin KuriaKose Koonampacal",
  designation: "Chairman, Divisional Representative, Clubmark Main Contact",
  Mail: "sample@gmail.com"
}, {
  image: profile,
  name: "Shyam Natarajapillai",
  designation: "Hon. Secretary, TICC 2nd XI-Captain",
  Mail: "netshya@gmail.com"
}, {
  image: profile,
  name: "Eldho George",
  designation: "Hon. Treasurer",
  Mail: "eldhogrg8811@gmail.com"
}, {
  image: profile,
  name: "Derek Devereaux",
  designation: "Head Groundsperson",
  Mail: "sample@gmail.com"
}, {
  image: profile,
  name: "Anil George",
  designation: "Joint Secretary and Social Media Manager",
  Mail: "sample@gmail.com"
}, {
  image: profile,
  name: "Biju Shafeek Babu",
  designation: "Club Safeguarding Officer, TICC 1st XI-Captain",
  Mail: "bijushafeek01@yahoo.com"
}, {
  image: profile,
  name: "Abad Jinna Sahib",
  designation: "Program Coordinator and All Stars Cricket Activator",
  Mail: "abadjnn126@gmail.com"
}, {
  image: profile,
  name: "Albin Jacob",
  designation: "Program Coordinator",
  Mail: "sample@gmail.com"
}];


export function About() {
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
    <div className='overflow-x-hidden'>
      <Navbar />
      <img src={resultbg} alt='bg' className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className='dark:bg-black '>
        <div className="md:h-full dark:bg-dark bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
          <div className="container w-full">
            <div className="grid grid-cols-1 sm:grid-cols-1 place-items-center">
              <div data-aos="fade-up" data-aos-duration="1500" className="sm:pt-4 md:pt-0 mt-4 mx-auto  sm:block">
                <img
                  src={abut}
                  alt="he"
                  className="max-h-[200px] md:max-h-[500px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)] mt-28 sm:mt-0 md:mt-32"
                />
              </div>

              <div className="w-full">
                <div className="space-y-5 md:mt-20 mt-12 pb-6">
                  <h1
                    data-aos="fade-up"
                    className="border-l-8 border-primary/50 y-4 text-3xl font-semibold dark:text-white font-serif"
                  >
                    About us
                  </h1>
                  <p data-aos="fade-up" className="leading-8 tracking-wide font-serif dark:text-white">
                    TICC was formed in 2019 initially known as TICC Curry Rivel.In 2020, the Club participated and topped the bubble group of the Somerset Cricket League in its very first year. An inspirational start to the journey!!!
                    The club was later renamed in 2022 as Taunton Indian Cricket Club and it has grown tremendously. The Club currently has 45 plus registered players plus a dozen of social membership. As a Club, we are proud of the achievements in such a short span of time. Last season, TICC had two Saturday league teams (Division 4 and Division 7 Red) in the Somerset Cricket League, and for the 2024 season onward, we will have three teams with the addition of a 3rd team on Sunday league which will later become a Saturday league team. In addition to the league games, we play lots of friendly matches including T20 in many parts of England. We won the T20 Champions – Plymouth T20 Tournament, and our second team ended up as Runners-up in the Somerset Cricket League (Division 7 Red) in the first year. We are not just a cricket club but an integral part of the community, engaging the community in various programs. We conducted women’s cricket for women in our community and Allstar and Dynamos Cricket for junior cricketers in the past.
                  </p>
                  <button data-aos="fade-up" className="button-outline border border-white bg-blue-400 text-white hover:text-white hover:bg-blue-800">
                    Contact us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <h1
            data-aos="fade-up"
            className="border-l-8 mb-5 border-primary/50 py-2 pl-2 text-3xl font-semibold dark:text-white font-serif dark:bg-black"
          >
            Our Officials
          </h1>

          <div className='flex text-center justify-center pb-8'>
            <img data-aos="zoom-in" src={officials} alt='bg' className='w-full md:w-1/2 shadow-xl' />
          </div>

          <div className='flex flex-wrap justify-center gap-10 mb-12 dark:bg-black' data-aos="fade-up" data-aos-duration="1000">
            {data.map((person, index) => (
              <Card key={index} className="w-full sm:w-96 hover:shadow-2xl" data-aos="fade-up" data-aos-duration={1000 + (index * 100)}>
                <CardBody className="text-center h-[150px]">
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {person.name}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium" textGradient>
                    {person.designation}
                  </Typography>
                </CardBody>
              </Card>
            ))}
          </div>
          <div>
            <h1
              data-aos="flip-right" data-aos-easing="ease-out-cubic"  data-aos-duration="1000"
              className="border-l-8 mb-8 border-primary/50 py-2 pl-2 text-3xl font-semibold dark:text-white font-serif dark:bg-black"
            >
              Contact Us...
            </h1>
            <div className='lg:mb-10' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
              <Card className="w-full ">
                <List className='flex flex-col md:flex-row items-center justify-center'>
                  <a href='https://www.facebook.com/people/Ticc-Cricket-Club/pfbid024SQjGTTm56WaREACWgEnaci8xky3gRqoNn9p3TSTKPfMmy6MZPhCmwiaMGTPMSiNl/'>
                    <ListItem className='hover:text-blue-800'>
                      <ListItemPrefix>
                        <FaFacebook className='w-[50px] h-[50px] mr-10' />
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
                        <FaInstagram className='w-[50px] h-[50px] mr-10' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Instagram
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                  <a href='https://wa.me/447440242622'>
                    <ListItem className='hover:text-green-800'>
                      <ListItemPrefix>
                        <FaWhatsapp className='w-[50px] h-[50px] mr-10' />
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
                        <IoLogoYoutube className='w-[50px] h-[50px] mr-10' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Youtube
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                  <a href='mailto:TauntonIndiancc@gmail.com'>
                    <ListItem className=''>
                      <ListItemPrefix>
                        <MdOutlineAttachEmail className='w-[50px] h-[50px] mr-10' />
                      </ListItemPrefix>
                      <div>
                        <Typography variant="h6" color="blue-gray">
                          Gmail
                        </Typography>
                      </div>
                    </ListItem>
                  </a>
                </List>
              </Card>
            </div>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default About;