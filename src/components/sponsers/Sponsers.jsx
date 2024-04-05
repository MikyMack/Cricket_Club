
import 'swiper/css';
import 'swiper/css/pagination';
import logoscc from "../../assets/own/somerset-logo.png"
import eccb from "../../assets/own/ecb.png"

export default function Sponsors() {
  return (
    <div className=''>
    <div>
      <h1 className="my-5 border-l-8 border-primary/50 py-2 ml-5 sm:ml-16 text-3xl font-semibold font-serif">
        Affiliated by
      </h1>
    </div> 
    <div>
      <div className=''>
      <div className='flex flex-col sm:flex-row items-center justify-center'>
  <img src={logoscc} className='w-full sm:w-40 h-auto sm:h-32'/>
  <img src={eccb} className='w-[200px] md:w-[100px] sm:w-40 h-auto sm:h-32'/> 
</div>

      </div>
    </div>
  </div>
  
  );
}
