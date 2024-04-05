import img from '../../assets/own/banner-01.jpg'
import { RiCommunityFill } from "react-icons/ri";
import { SlNote } from "react-icons/sl";
import { MdSportsCricket } from "react-icons/md";

const skillsData = [
  {
    name: " Unleashing Potential",
    icon: (
      <MdSportsCricket className="text-5xl text-blue-300 group-hover:text-black duration-300" />
    ),
    link: "#",
    description: "TICC is committed to creating an inclusive and welcoming environment where individuals of all ages, backgrounds, and skill levels can discover their passion for cricket and embark on their cricketing journey. This commitment extends equally to recreational players seeking camaraderie and enjoyment, and aspiring professionals who yearn to hone their skills and compete at the highest level. We believe that everyone deserves the opportunity to experience the joy, discipline, and teamwork that cricket fosters.",
    aosDelay: "0",
  },
  {
    name: "Building a Strong Community",
    icon: (
      <SlNote className="text-5xl text-blue-300 group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "Recognizing the power of sport to transcend cultural and social barriers, TICC aspires to foster a positive and inclusive environment where players, families, and supporters can come together, share their passion for the game, and forge lasting bonds. We believe that cricket possesses the unique ability to connect people, creating a vibrant and supportive community that celebrates diversity and fosters a sense of belonging.",
    aosDelay: "1000",
  },
  {
    name: "Enriching the Lives of Others",
    icon: (
      <RiCommunityFill className="text-5xl text-blue-300 group-hover:text-black duration-500" />
    ),
    link: "#",
    description: "TICC goes beyond being just a cricket club; we aim to be an active and engaged member of the community. We recognize the positive impact that sport can have on individuals and society as a whole. By organizing initiatives such as women's and junior cricket programs, we promote inclusivity, encourage participation, and enrich the lives of individuals beyond the boundaries of the cricket field.",
    aosDelay: "1500",
  },
];

export default function Experience() {
  return (
    <div className="bg-cover w-full bg-center mt-28 mb-20 pb-20 h-full flex flex-col  relative dark:bg-black bg-gray-400" data-aos="fade-up" style={{ backgroundImage: `url(${img})` }}>
     
      <div className="absolute inset-0 bg-black opacity-10" style={{ backdropFilter: 'blur(10px)' }}></div>
      <div>
          <h1 className="my-5 border-l-8 border-primary/50 py-2 ml-5 sm:ml-16 text-3xl font-semibold font-serif">
            Our Vision 
          </h1>
        </div>
      <div className="grid grid-cols-1 px-9 sm:grid-cols-2 md:grid-cols-3 mt-16 gap-4">
      {skillsData.map((skill) => (
        <div
          key={skill.name}
          data-aos="fade-up"
          data-aos-delay={skill.aosDelay}
          className="card text-center group space-y-3 sm:space-y-6 p-2 sm:p-4 bg-dark hover:bg-blue-50 duration-300 text-white hover:text-black rounded-lg"
          style={{ minWidth: '200px' }}
        >
          <div className="grid place-items-center">{skill.icon}</div>
          <div className='h-[50px]'>
            <h1 className="text-lg sm:text-2xl font-bold">{skill.name}</h1> {/* Adjust text size */}
          </div>

          <p className="text-sm sm:text-base">{skill.description}</p> {/* Adjust text size */}
        </div>
      ))}
    </div>
 
    </div>


  )
}


