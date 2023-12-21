import Image from "next/image"
import { Button } from "./button"


const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">

      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[324px]">Get for free now!</h2>
          <p className="regular-16 text-gray-10"> Available on iOS and Android</p>
        
  <div className="flex flex-col w-full gap-3 whitespace-nowrap xl:flex-row">        
        <Button
        
          type="button"
          icon="./apple.svg"
          title="Download app"
          variant="btn_white" 
          full    
        />
        <Button
          type="button"
          title="How we work"
          icon="./android.svg"
          variant="btn_dark_green_outline"
          full
        
        />
      </div>
     
      </div>
      <div className="flex-1 flex justify-end items-center">
        <Image
        src={"/phones.png"}
        alt="phone"
        height={870}
        width={550}
        />
      </div>
      </div>
    </section>
  )
}

export default GetApp