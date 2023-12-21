import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constants"
import { link } from "fs"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  return (
<footer className="flexCenter mb-24">
  <div className="flex flex-col padding-container max-container w-full gap-14">
    <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
      <Link href="/" className="mb-10">
      <Image
      src={"hilink-logo.svg"}
      alt="loggo"
      width={72}
      height={29}
      />

      </Link>
      <div className="flex flex-wrap md:flex-1 sm:justify-between gap-10">
        {FOOTER_LINKS.map((columns)=>(
          <FooterColumn title={columns.title}>
            <ul className="regular-14 flex flex-col gap-4 text-gray-30">
            {columns.links.map((link)=>
            (
              <Link href="/" key={link}>
                {link}
              </Link>
            ))}

            </ul>
           
          </FooterColumn>
        ))}
        <div className="flex flex-col gap-5">
           <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            {FOOTER_CONTACT_INFO.links.map((link)=>
            (
              <Link href="/"
              key={link.label}
              className="gap-4 flex md:flex-col lg:flex-row"
              >
                <p className="regular-16 whitespace-nowrap  ">{link.label}: </p>
                <p className="medium-14 whitespace-nowrap  text-blue-70">{link.value}</p>
          
              </Link>
            ))}

           </FooterColumn>  

        </div>
        <div className="flex flex-col gap-5">
          <FooterColumn title={SOCIALS.title}>
            <ul className="regular-14 text-gray-30 flex gap-5">
              {SOCIALS.links.map((link)=>
              (
                <Link href="/"
                key={link}
                >
                  <Image
                  src={link}
                  alt="logo"
                  width={24}
                  height={24}
                  />
                </Link>


              ))}

            </ul>

          </FooterColumn>

        </div>

      </div>
   
    </div>  
<div className="border border-gray-20"/>
<p className=" regular-14 w-full  flex text-gray-30 justify-center">2023 Moulolink | All rights reserved</p>
  </div>

</footer>  


)
}
type Footercolumnprops={
  title:string;
  children:React.ReactNode;

}
const FooterColumn=({title,children}:Footercolumnprops)=>{
  return(
    <div className="flex flex-col gap-5">
       <h4 className="bold-18 whitespace-nowrap"> {title}</h4>
       <p>{children}</p>

    </div>
   

  )
}