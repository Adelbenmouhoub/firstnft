
import { FaBeer } from "react-icons/fa";
import { BiSolidWallet } from "react-icons/bi";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineSearch, AiOutlineMenu, AiFillCloseCircle } from "react-icons/ai";
import MobileMenue from "./MobileMenue"
import React, {useState, useCallback} from "react"




const Header = () => {
  const [shomobilmenu, setShowmobilemenue] = useState(false);

  const [iconsMenu, setIconsMenue] = useState(false);

   const [isMenuOpen, setIsMenuOpen] = useState(false);


  const [loked, setLoked] = useState(false);

  


   const Icon = iconsMenu ? AiFillCloseCircle : AiOutlineMenu;

  const togelMenue = useCallback(() => {
   setIsMenuOpen(!isMenuOpen);

  
      setShowmobilemenue((current) => !current)
  
      
    
  }, [])
  return(
   <div className="flex backdrop-blur-sm bg-white bg-opacity-40                  flex-row  items-center h-14 fixed inset-0 z-40 ">
   <div className='flex flex-row'>
   <img className="h-10  ml-2" src="https://opensea.io/static/images/logos/opensea-logo.svg" />
     <h1 className="text-white flex flex-row items-center ml-2 text-bold cursor-pointer">OpenSea</h1>
   </div>


     <div className="flex sm:flex sm:ml-5  lg:flex md:flex hidden flex-row items-center lg:ml-12 md:ml-12 bg-slate-600 bg-opacity-70 h-8 w-56 rounded-md ">
       <AiOutlineSearch className="ml-2  flex"   size={15} color="white" /> 
     <input className="outline-none border-0 bg-transparent text-white ml-2	"  placeholder="Search nft" />
     </div>



     
     <div className=
       'flex flex-row'>

       {/*/   lg dive for the navbar  */}

                <div className="lg:flex flex flex-row  hidden md:flex ml-48 xl:ml-56   ">
         <p className="text-white cursor-pointer flex flex row text-[12.5px]  ">Colection</p>

                  <div>
         
         <p className="ml-8 text-[12.5px] cursor-pointer text-white">Nft</p>
         
         
         </div>

                  <div>
         
         <p className="ml-8 text-[12.5px] cursor-pointer text-white">
         <BiSolidWallet size={20} color="white" />
         </p>
         
         
         </div>



                  <div>
         
         <p className="ml-8 text-[12.5px] cursor-pointer text-white">
         <MdDarkMode size={20} color="white" />
         </p>
         
         
         </div>
         </div>





       

         


         
       </div>

         

       <div className="ml-48  md:ml-96 cursor-pointer lg:hidden sm:flex sm:ml-72 ">
         {isMenuOpen ? (
     <AiOutlineMenu   onClick={togelMenue} className="lg:hidden md:hidden" size={20} color="white" />
         ) : (
           <AiOutlineMenu   onClick={togelMenue} className="lg:hidden md:hidden" size={20} color="white" />
     )}
       


         


         <MobileMenue visible={shomobilmenu} />
         
       </div>




       




       








     
   </div>
  )
}

export default Header;