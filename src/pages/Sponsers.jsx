
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer.jsx'
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from "aos";
import resultbg from "../assets/matchResults-bg.png"
import scs from "../assets/scs-card.jpg"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./moving.css"

export default function Sponsers() {
  const [sponsorLogo, setSponsorLogo] = useState([])

  useEffect(() => {
    async function fetchLogo() {
      try {
        const response = await axios.get('https://admin.tauntonindiancricketclub.com/api/partners');
        if (response.data && response.data.partners) {
          setSponsorLogo(response.data.partners);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchLogo();
  }, []);

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
    <div className=' dark:bg-black overflow-x-hidden'>

      <Navbar />
      <img src={resultbg} alt='bg' className='absolute inset-0 w-full h-full object-cover z-0' />
      <div>
        <div className='mt-32 relative z-10'>
          <h1 className="my-5 border-l-8 border-primary/50 py-2 ml-5 sm:ml-16 text-3xl font-semibold font-serif dark:text-white">
            Our Official Sponsors
          </h1>
        </div>
        <div className='relative'>
          <p className='flex items-center justify-center font-semibold md:text-2xl text-red-800 overflow-hidden'>
            <span className="marquee">Looking for new sponsors for 2024-2027<span>⭐</span></span>
          </p>
          <div>
            <div className='relative'>
              <div className="flex md:flex-row flex-col items-center justify-center gap-4">
                {sponsorLogo.map((item, index) => (
                  <div key={index} className="flex flex-col items-center justify-center pt-7">
                    <img src={`https://admin.tauntonindiancricketclub.com/uploads/testmonial/${item.image}`} alt="logo" className='w-56 h-auto md:h-full' />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-center mt-20'>
          <Card className="md:w-[30%] w-[80%] h-60% shadow-lg">
            <CardHeader floated={false} color="blue-gray">
              <img
                src={scs}
                alt="scs"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex  items-center justify-between">
                <Typography variant="h5" color="blue-gray" className="font-extrabold">
                  Somerset County Sports
                </Typography>
              </div>
              <Typography color="gray">
                We have a great selection of Cricket equipment including cricket bats, cricket batting pads, cricket batting gloves, cricket balls, cricket protection, cricket helmets, cricket bags, cricket shoes and accessories from all the major brands.
              </Typography>
            </CardBody>
            <CardFooter className="pt-3">
              <a href='https://www.somersetcountysports.com/'>
              <Button size="lg" fullWidth={true}>
                Buy Now
              </Button>
              </a>
            
            </CardFooter>
          </Card>
        </div>
      </div>


      <Footer />
    </div>
  )
}
