
import BlogCard from './ResultsCards'

export default function Results() {
  return (
    <>
    <div className="bg-slate-200 dark:bg-black dark:text-white pb-14 w-full">
    
      <section data-aos="fade-up" className="container w-full">
        <h1 className="my-8 border-l-8 border-primary/50 py-2  text-3xl font-semibold font-serif">
          Our Teams 
        </h1>
        <div className='w-full'>
         
            <BlogCard  />
        
        </div>
      </section>
    </div>
  </>
  )
}
