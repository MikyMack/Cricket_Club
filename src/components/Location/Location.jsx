import pattern from "../../assets/website/pattern.jpeg";
import { motion } from "framer-motion";

const bannerImg = {
  backgroundImage: `url(${pattern})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Location = () => {
  return (
    <div
      className="container py-3"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
       <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold dark:text-white font-serif">
          Location
        </h1>
      
      <motion.div
        className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl"
        style={{ ...bannerImg, filter: "grayscale(100%)" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ filter: "grayscale(0%)" }}
        whileTap={{ filter: "grayscale(0%)" }}
        transition={{ duration: 0.5 }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         
          <motion.div
            className=" w-full bg-gray-200 rounded-lg shadow-md overflow-hidden"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileTap={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            data-aos="fade-up"
            data-aos-duration="1000"
          > <h1 className="text-lg font-semibold pl-4 font-serif"> First team Ground</h1>
            <h2 className="text-lg font-semibold pl-4 font-serif">TA10 0JD, Curry Rivel, Langport, UK</h2>
            <a href="https://www.google.com/maps?q=TA10+0JD,+Curry+Rivel,+Langport,+UK" target="_blank" rel="noopener noreferrer">
              <motion.iframe
                title="location2"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1254.992680260622!2d-2.86993315!3d51.0164193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48720d752f9fce05%3A0xbd6a268b0ba938f0!2sCurry%20Rivel%2C%20Langport%20TA10%200JD%2C%20UK!5e0!3m2!1sen!2sin!4v1709618857869!5m2!1sen!2sin"
                width="500px"
                height="240px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></motion.iframe>
            </a>
          </motion.div>
          <motion.div
            className=" w-full h-[300px] bg-gray-200 rounded-lg shadow-md overflow-hidden"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileTap={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            data-aos="fade-up"
            data-aos-duration="1000"
          > 
            <h1 className="text-lg font-semibold pl-4 font-serif">Second team and sunday team Ground</h1>
            <h2 className="text-lg font-semibold pl-4 font-serif">TA3 6EQ, Willey Rd, Stoke St Gregory, Taunton, UK</h2>
            <a href="https://www.google.com/maps?q=TA3+6EQ,+Willey+Rd,+Stoke+St+Gregory,+Taunton,+UK" target="_blank" rel="noopener noreferrer">
              <motion.iframe
                title="location1"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d628.2511600428443!2d-2.9337661223105287!3d51.04101623555886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48720c125848e27f%3A0x6edea38404c43c57!2sWilley%20Rd%2C%20Stoke%20St%20Gregory%2C%20Taunton%20TA3%206EQ%2C%20UK!5e0!3m2!1sen!2sin!4v1709618957993!5m2!1sen!2sin"
                width="500px"
                height="240px"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></motion.iframe>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Location;


