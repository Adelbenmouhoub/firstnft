import { BiSolidWallet } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";



interface MobilemeuProps{
  visible?: boolean;
}


const MobileMenue:React.FC<MobilemeuProps> = ({
  visible
}) => {
  if(!visible){
    return null;
  }
  return(
    <div className="bg-slate-800 w-44  drop-shadow-2xl items-center absolute top-10 right-0 py-5 flex-col border-0 rounded-md
  border-gray-800 flex ">
    <div className="flex flex-col gap-4">
    <div className="px-3 text-center text-white hover:underline">
    Colection
    </div>
      <div className="px-3 text-center text-white hover:underline">
    Nft
    </div>
      <div className="px-3 text-center text-white hover:underline">
        
    <BiSolidWallet className="items-center ml-5" size={25} />
    </div>
      <div className="px-3 text-center text-white hover:underline">
    <MdDarkMode className="ml-5"  size={25}/>
    </div>
    </div>
    </div>
  )
}

export default MobileMenue;