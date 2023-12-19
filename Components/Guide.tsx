import Image from "next/image"
import Camp from "./Camp"

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="mt-4 pb-24  padding-container max-conatainer w-full">
        <Image
        src={'/camp.svg'}
        alt="camp"
        width={50}
        height={50}
        />
       <p className="text-green-500 mb-3 -mt-1 regular-18">WE ARE HERE FOR YOU</p>
       <div className="flex flex-wrap justify-between gap-2 ">
        <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Easy Path</h2>
        <p className="text-gray-30 regular-16 xl:max-w-[540px]"> Only with the hilink application you will no longer get lost and get lost again, because 
          we already support offline maps when there is no
           internet connection in the field. Invite your friends, relatives and friends to have fun in the wilderness through the valley and reach the top of the mountain</p>

      </div>
      </div>
    
<div className="flexCenter max-container relative w-full h-full">
  <Image
  src={"/boat.png"}
  alt="boat"
  height={580}
  width={1440}
  className="w-full object-cover xl:rounded-5xl object-center"
  />
  <div className="absolute bg-white flex py-8 pl-5 pr-7 gap-2  border shadow-md rounded-2xl md:left-[5%] lg:top-20" >
  <Image 
  src={"/meter.svg"}
  alt="meter"
  height={16}
  width={158}
  className="h-full w-auto"
  />
    <div className=" flex-col flexBetween">
      <div className="flex w-full flex-col">
        <div className="w-full flexBetween">
          <p className="regular-16 text-gray-30 ">Destination </p>
          <p className="bold-16 text-green-500">14H</p>
        </div>
        <p className="bold-18 mt-2">Sidi bel abbes</p>

      </div>
      <div className="flex w-full flex-col mt-2">
     
          <p className="regular-16 text-gray-30 ">Star track</p>
          <h4 className="bold-20 whitespace flex-nowrap mt-2">Guelma</h4>
        </div>
     

      
    </div>

  </div>

</div>
    </section>
  )
}

export default Guide