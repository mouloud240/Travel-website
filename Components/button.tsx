import Image from "next/image";

type Buttonprops={
    type:'button'| 'submit'| 'reset';
    title:string;
    icon?:string;
    variant:'btn_dark_green'|'btn_green'|'btn_white_text'|'btn_dark_green_outline'|"btn_white";
    full?:boolean

}
export const Button = ({type,title,icon,variant,full}:Buttonprops) => {
  return (
    <button className={`flexCenter gap-3 border rounded-full ${variant} ${full &&'w-full' }`}
    type={type}>
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer " >{title}</label>
    </button>
  
  )
}
