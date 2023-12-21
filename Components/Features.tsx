import { FEATURES } from '@/constants'
import Image from 'next/image'

const Features = () => {

  return (
    <section className='overflow-hidden flex-col flexCenter bg-feature-bg bg-center bg-no-repeat py-24 '>
      <div className='max-container padding-container flex justify-end w-full relative'>
      <div className=' flex flex-1 lg:min-h-[900px]'>
          <Image
          src={'/phone.png'}
          alt='phone'
          width={440}
          height={1000}
          className='feature-phone'
          />
        </div>
   <div className=' z-20 w-full flex flex-col lg:w-[60%]'>
  <div className='relative'>
  <Image
        src={'/camp.svg'}
        alt="camp"
        width={50}
        height={50}
        className='absolute left-[-5px] top-[-26px] w-10 lg:w-[50px]'
        />
   <h2 className='bold-40 lg:bold-64'>Our Featsures</h2>

   </div>
   <ul className='gap-10 mt-5 grid md:grid-cols-2'>
    {FEATURES.map((feature)=>(
      <FeatureItem 
      key={feature.title}
       title={feature.title}
      icon={feature.icon}
      description={feature.description}
      
      />
    ))}
   </ul>
     </div>
      </div>
    </section>
  )
  
}
interface FeatureItemprops{
  title:string;
  description:string;
  icon:string;

}
const FeatureItem=({title,description,icon}:FeatureItemprops)=>{
  return(
    <li className='flex flex-1 flex-col w-full items-start'>
      <div className='rounded-full lg:p-7 p-4 bg-green-50'>
      <Image
      
    src={icon}
    alt='icon'
    width={28}
    height={28}
    />  

      </div>
      <h2 className='bold-20 lg:bold-32 mt-5 capitalize'> {title}</h2>
      <p className='regular-16 text-gray-20 mt-5 bg-white/80 lg:mt-30 lg:bg-none'>{description}</p>
      
    </li>
 
    
  )
}
export default Features