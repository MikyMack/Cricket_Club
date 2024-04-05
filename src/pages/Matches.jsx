
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import AOS from "aos";
import { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import resultbg from "../assets/matchResults-bg.png"
import axios from 'axios';



export default function Matches() {
const [matches,setMatches]=useState([])
const [matchReport,SetMatchReport]=useState([])

useEffect(() => {
  async function fetchMatches() {
    try {
      const response = await axios.get('https://admin.tauntonindiancricketclub.com/api/fixtures');
      if (response.data && response.data.Fixtures) {
        setMatches(response.data.Fixtures);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  fetchMatches();
}, []);

useEffect(() => {
  async function fetchReports() {
    try {
      const response = await axios.get('https://admin.tauntonindiancricketclub.com/api/match');
      if (response.data && response.data.partners) {
        SetMatchReport(response.data.partners);
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

  fetchReports();
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
    <div className='dark:bg-black overflow-x-hidden'>
      <Navbar />
      <img src={resultbg} alt='bg' className='absolute inset-0 w-full h-full object-cover z-0' />

      <div className='relative z-10'>
        <div className='mt-32 px-4 sm:px-0 '>
          <h1 className="my-5 border-l-8 border-primary/50 py-2 ml-5 sm:ml-16 text-3xl font-semibold font-serif dark:text-white">
            Fixtures & Results
          </h1>
        </div>

        <div className='mt-14 flex items-center justify-center'>
          {matches.map((match, index) => (
            <Card key={index} className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <CardHeader shadow={false} floated={false} className="h-[300px] sm:h-[400px] lg:h-[500px]">
                <img
                  src={`https://admin.tauntonindiancricketclub.com/uploads/fixmat/${match.file}`} 
                  alt="card-image"
                  className="h-full w-full object-contain"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {match.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href={"https://tauntonindian.play-cricket.com/Matches" } target="_blank" rel="noopener noreferrer">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Click for more details...
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
    

        <div className='mt-32 px-4 sm:px-0 '>
          <h1 className="my-5 border-l-8 border-primary/50 py-2 ml-5 sm:ml-16 text-3xl font-semibold font-serif dark:text-white">
            Match Report
          </h1>
        </div>
        <div className='mt-14 flex items-center justify-center'>
          {matchReport.map((match, index) => (
            <Card key={index} className="w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              <CardHeader shadow={false} floated={false} className="h-[300px] sm:h-[400px] lg:h-[500px]">
                <img
                  src={`https://admin.tauntonindiancricketclub.com/uploads/fixmat/${match.file}`} 
                  alt="card-image"
                  className="h-full w-full object-contain"
                />
              </CardHeader>
              <CardBody>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {match.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <a href={"https://tauntonindian.play-cricket.com/match_reports"} target="_blank" rel="noopener noreferrer">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Click for more details...
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
