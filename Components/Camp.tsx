import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface Campprops{
  backgroundimage:string;
  title:string;
  subtitle:string;
  peoplejoined:string;
}
const Campsite=({backgroundimage,title,subtitle,peoplejoined}:Campprops)=>{
  return(
    <div className={`h-full w-full min-w-[1100px] ${backgroundimage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
     <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
      <div className="flexCenter gap-4">
        <div className="rounded-full bg-green-50 p-4">
          <Image
            src="/folded-map.svg"
            alt="map"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
      </div>

      <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{peoplejoined}</p>
      </div>
     </div>
    </div>
    

  )
}
const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Campsite 
        backgroundimage="bg-bg-img-1"
        title="Putuk Truno Camp"
        subtitle="Prigen, Pasuruan"
        peoplejoined="300+ joined"
/>
<Campsite
  backgroundimage="bg-bg-img-2"
  title="Mountain View Camp
  "
  subtitle="Somewhere in the Wilderness

  "
  peoplejoined="1000+ joined"/>
</div>
  <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
    <div className="bg-green-50 p-8 lg:max-w-[500px] w-full  relative xl:max-w-[734px] xl:rounded-5xl overflow-hidden rounded-3xl xl:py-20 ">
      <h2 className="regular-24 md:regular-32 lg:regular-60 capitalize text-white"><strong>Feeling Lost</strong> And Not Knowing The Way?</h2>
      <p className="text-white mt-5 regulart-14 xl:regular-16"  >
        Starting from the anxiety of the climbers when visiting a 
      new climbing location, the possibility of getting lost is 
      very large. That's why we are here for those of you who
       want to start an adventure.</p>
       <Image
       src={'/quote.svg'}
       alt="whaterevr"
       width={190}
       height={220}
       className="camp-quote"
       />
    </div>
  </div>

    </section>
  )
}

export default Camp