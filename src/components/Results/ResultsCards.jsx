import { useState } from 'react';
import logo from '../../assets/logo.png';
import { useMotionValue, useTransform, motion } from 'framer-motion';
import image1 from '../../assets/own/teams.jpg';
import image2 from '../../assets/cheerMoments/b.jpg';
import image3 from '../../assets/own/Womens-team.jpg';
import image4 from "../../assets/own/division.jpg"

const BlogCard = () => {
  const data = [
    {
      id: 1,
      title: 'Division 4',
      img: image1,
    },
    {
      id: 2,
      title: 'Sunday Team',
      img: image2,
    },
    {
      id: 3,
      title: 'Division 6',
      img: image4,
    },
    {
      id: 3,
      title: 'Womens Team',
      img: image3,
    },
  ];
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (img) => {
    setSelectedImage(img);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <motion.div
      className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-14 mt-20 md:w-full w-52 mx-auto '
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {data.map(({ id, img, title }) => (
        <motion.div
          key={id}
          style={{ perspective: 1000 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            style={{ x, y, rotateX, rotateY, z: 50 }}
            drag
            dragElastic={0.1}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            whileTap={{ cursor: 'grabbing' }}
            className='w-full md:w-[270px] min-h-[300px] bg-gray-200 mb-3 rounded-[15px] border-[2px] border-white px-[20px] py-[12px] cursor-grab relative'
            onClick={() => openImage(img)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }} // Added hover transition
          >
            <motion.div
              className='mb-3'
              onDragStart={(e) => e.preventDefault()}
              onContextMenu={(e) => e.preventDefault()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.img
                src={img}
                style={{ height: '200px', width: '100%', objectFit: 'cover' }}
                alt=''
                draggable='false'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              />
            </motion.div>
            <motion.h1
              className='text-2xl mb-3 font-bold dark:text-black font-serif'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {title}
            </motion.h1>
            <motion.div
              style={{ x, y, rotateX, rotateY, z: 5000 }}
              className='absolute top-32 -right-20 md:w-[160px]'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.img
                className='mr-6'
                src={logo}
                alt=''
                draggable='false'
                style={{ width: '100px' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
      {selectedImage && (
        <motion.div
          className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className='relative'
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={selectedImage}
              alt='Selected Image'
              className='max-w-full max-h-full'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.button
              onClick={closeImage}
              className='absolute top-4 right-4 text-white bg-black bg-opacity-50 px-2 py-1 rounded-md'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default BlogCard;


