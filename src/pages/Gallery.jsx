
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from 'react';
import axios from 'axios';
import AOS from "aos";
import resultbg from "../assets/matchResults-bg.png"

export default function Gallery() {
  const [imagesData, setImagesData] = useState([]);
  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await axios.get('https://admin.tauntonindiancricketclub.com/api/gallery');
        if (response.data && response.data.photos) {
          setImagesData(response.data.photos);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchImages();
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
    <div className="overflow-x-hidden">
      <Navbar />
      <img src={resultbg} alt='bg' className='absolute inset-0 w-full h-full object-cover z-0' />
      <div className="relative">
      <div className='flex items-center justify-center mt-32'>
          <h1 className="my-5 border-l-8 border-primary/50 py-2 ml-5 sm:ml-16 text-3xl font-semibold font-serif dark:text-white">
            Gallery
          </h1>
        </div>
        <div className='pl-5 pr-5 pb-10'>
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    {imagesData.map((image, index) => (
      <div key={index} data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}>
        <img
          className="h-auto max-w-full rounded-lg object-cover object-center"
          src={`https://admin.tauntonindiancricketclub.com/uploads/gallary/${image.name}`}
          alt={`gallery-photo-${index}`}
        />
      </div>
    ))}
  </div>
</div>

      </div>
      <Footer />
    </div>
  )
}
