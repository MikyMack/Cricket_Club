
import ball from "../../assets/hero-bg.png";
import bgabst from '../../assets/bg-about.png'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="dark:bg-dark  bg-slate-100 sm:min-h-[600px] sm:grid sm:place-items-center duration-300 relative">
      <div className="absolute inset-0 z-0">
        <img src={bgabst} alt="" className="w-full h-full object-fill relative" />
      </div>
      <div className="container relative ">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={ball}
              alt="ball"
              className="sm:scale-125 sm:-translate-x-11 max-h-[300px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold dark:text-white font-serif">
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide dark:text-white">
                TICC was formed in 2019 initially known as TICC Curry Rivel.  In 2020, the Club participated and topped the bubble group of the somerset cricket league in its very first year. An inspirational start to the journey!!! 
              </p>
              <p data-aos="fade-up" className="text-lg font-semibold dark:text-white">
                We are not just a cricket club but an integral part of the Community engaging the community in various programs. 
              </p>
              <Link to='/about'>
              <div data-aos="fade-up"><span className="cursor-pointer hover:text-red-700 dark:text-red-700">more...</span></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;


