import React, { useState, useEffect, useCallback } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import useInfoModel from 'hooks/UseInfoModel';





interface InfoModelProps{
  visibel?: boolean;
  onClose: any;
  
}

const InfoModel: React.FC<InfoModelProps> = ({
  visibel,
  onClose
}) => {



   const [action, setAction] = useState<boolean>(false);

  const handleButtonClick = () => {
    setAction(true);
  };

  const handleImageDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/0 (15).png'; // Remplacez par le chemin de votre image
    downloadLink.download = 'downloaded_image.jpg';
    downloadLink.click();
    setAction(false);
  };

  const [isVisebel, setIsVisebel] = useState(!!visibel);

  useEffect(() => {
    setIsVisebel(!!visibel)
  }, [visibel]);





const handelcolose = useCallback(() => {
  setIsVisebel(false);

  setTimeout(() => {
    onClose();
  }, 300)
}, [onClose]);

  if(!visibel){
    return null;
  }








  
  return(
    <div className='z-50 transition duration-300 bg-black bg-opacity-60 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>
    <div className='relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden'>
    <div className={`${isVisebel ? 'scale-100	' : 'scale-0'} transform  duration-300	relative flex-auto bg-zinc-900 drop-shadow-md `}>
    <div className='relative h-96'>
    <img src='https://lh3.googleusercontent.com/u/0/d/1sTwuAyIFpDdOEIBKz_kUzA-7ap8TR2BI=w1440-h692-iv2' />
      <div onClick={handelcolose} className='cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex items-center justify-center'>
      <AiOutlineClose size={18} color='white' />
      </div>
      <div className=' bottom-[10%] mt-5'>
      <button onClick={handleButtonClick} className='text-white ml-16 hover:bg-opacity-70 rounded-md bg-sky-500 text-[17px] w-[170px] h-[50px]'>Dowload the image</button>
        {action && (
        <img
          src="https://lh3.googleusercontent.com/u/0/d/1sTwuAyIFpDdOEIBKz_kUzA-7ap8TR2BI=w1440-h692-iv2" // Remplacez par le chemin de votre image
          alt="Téléchargée"
          style={{ display: 'none' }}
          onLoad={handleImageDownload}
        />
      )}
      </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default InfoModel;