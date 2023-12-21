import Image from "next/image"
import { Button } from "./button"

const Hero =() => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
      <Image
      src="camp.svg"
      alt="camp"
      height={32}
      width={32}
      className="absolute left-[-5px] top-[-50px] w-10 xl:w-[50px]"
      />
           <h1 className="bold-52 lg:bold-88 ">Putuk Truno Camp Area</h1>
      <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">We want to be on each of your journeys seeking the 
      satisfaction of seeing the incorruptible beauty of nature. We
       can help you on an adventure around the world in just one app</p>
      
      <div className="my-11 flex flex-wrap gap-2 ">
      <div className="flex items-center gap-">
        {Array(5).fill(1).map((_,index)=>(
          <Image
          src="./star.svg"
          key={index}
          alt="star"
          width={24}
          height={24}
          />
        )
        )}
      </div>
      <p className="bold-16 lg:bold-20  text-blue-70">300k <span >Excellent reviews</span></p>
      </div>
    <div className="flex w-full gap-3 flex-col lg:flex-row xl:flex-row">
      <Button
      type="button"
      title="Download app"
      variant="btn_green"
      />
      <Button 
      type="button"
      title="How we work"
      icon="./play.svg"
      variant="btn_white_text"
      />
    </div>
    </div>
    <div className="relative flex flex-1 items-start">
  <div className="relative z-20 flex flex-col bg-green-90 px-6 py-7 gap-8 w-[265px] rounded-3xl">
    <div className="flex flex-col">
      <div className="flexBetween">
        <p className="text-gray-20 regular-16">Location</p>
        <Image className="cursor-pointer"
          src='./close.svg'
          alt="close"
          width={26}
          height={26}
        />
      </div>
      <p className="text-white bold-20">Sidi Bel Abbes</p>
      <div />
      <div className="flexBetween mt-10">
        <div className="flex flex-col">
          <p className="text-gray-30">Distance</p>
          <p className="text-white">911 Km</p>
          
        </div>



        <div className="flex flex-col">
          <p className="text-gray-30">ELavation</p>
          <p className="text-white">5.45km</p>
          
        </div>
      </div>
    </div>
  </div>
</div>
 
    </section>
  )
}

export default Hero