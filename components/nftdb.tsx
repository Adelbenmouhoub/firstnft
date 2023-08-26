import React, { useState, useEffect, useCallback } from 'react';
import useInfoModel from './hooks/UseInfoModel';


const NftDb = () => {

  const {openModel} = useInfoModel();


  const handelopenModel = useCallback(() => {
    openModel();
  }, [openModel])
  
  return (
    
    <div className="flex md:overflow-x-scroll  mb-7 sm:items-center md:items-start lg:flex-row md:flex-row sm:flex-col items-center flex-col md:flex-row    ">

      


      <div className='flex md:overflow-x-scroll md:flex-col flex-col mb-7 sm:flex-col '>
       

      


        {/* le debut de la 3 em image */}

        <div className='md:flex md:flex-col lg:ml-20 md:mr-14'>
          <div className='md:flex md:flex-row '>
        <div onClick={handelopenModel}   className='flex md:flex-row   md:w-96 flex-row mt-5 relative sm:ml-10 mb-10'>
        <img  className='h-48 md:w-48 md:ml-10 cursor-pointer transition' src='https://lh3.googleusercontent.com/u/0/d/1sTwuAyIFpDdOEIBKz_kUzA-7ap8TR2BI=w1440-h692-iv2' alt='NFT'/>

        {/* Diviser l'image en deux parties */}
        <div className="absolute md:absolute md:inset-x-0  inset-x-0 md:mt-36     mt-36   md:bg-white    bg-white  md:p-4 
    p-4          w-full md:w-48 md:ml-10">
          
          <p className="text-gray-500">  #555</p>
        </div>
      </div>


            <div className='flex md:flex-row  md:w-96 flex-row mt-5 relative sm:ml-10 mb-10'>
        <img className='h-48 md:w-48 md:ml-10 cursor-pointer transition' src='https://lh3.googleusercontent.com/u/0/d/1JemiOjzuDt1ftyoyEJsaPhtUIGhjGDq5=w1440-h692-iv2' alt='NFT'/>

        {/* Diviser l'image en deux parties */}
        <div className="absolute md:absolute md:inset-x-0  inset-x-0 md:mt-36     mt-36   md:bg-white    bg-white  md:p-4 
    p-4          w-full md:w-48 md:ml-10">
          
          <p className="text-gray-500">  #555</p>
        </div>
      </div>



            <div className='flex md:flex-row  md:w-96 flex-row mt-5 relative sm:ml-10 mb-10'>
        <img className='h-48 md:w-48 md:ml-10 cursor-pointer transition' src='https://lh3.googleusercontent.com/u/0/d/1Tbw9qzqV6Kbbtskg3KZO-dhyrbdIR8GW=w1440-h692-iv2' alt='NFT'/>

        {/* Diviser l'image en deux parties */}
        <div className="absolute md:absolute md:inset-x-0  inset-x-0      mt-36   md:bg-white    bg-white  md:p-4 
    p-4    md:mt-36      w-full md:w-48 md:ml-10">
          
          <p className="text-gray-500">  #555</p>
        </div>
      </div>


            





</div>

                <div className='md:flex md:flex-row'>
        <div className='flex md:flex-row  md:w-96 flex-row mt-5 relative sm:ml-10 mb-10'>
        <img className='h-48 md:w-48 md:ml-10 cursor-pointer transition' src='https://lh3.googleusercontent.com/u/0/d/1IaB-3qU7pA0hVAMN4xePXNyBp-67bw87=w1440-h692-iv2' alt='NFT'/>

        {/* Diviser l'image en deux parties */}
        <div className="absolute md:absolute md:inset-x-0  inset-x-0 md:mt-36     mt-36   md:bg-white    bg-white  md:p-4 
    p-4          w-full md:w-48 md:ml-10">
          
          <p className="text-gray-500">  #555</p>
        </div>
      </div>


        <div className='flex  md:w-96 flex-row mt-5 relative sm:ml-10 mb-10'>
        <img className='h-48 md:w-48 md:ml-10 cursor-pointer transition' src='https://lh3.googleusercontent.com/u/0/d/1YvErIsI_0QAMuhc9NbE3AGmWSbOex-ns=w1440-h692-iv2' alt='NFT'/>

        {/* Diviser l'image en deux parties */}
        <div className="absolute md:absolute md:inset-x-0  inset-x-0 md:mt-36     mt-36   md:bg-white    bg-white  md:p-4 
    p-4          w-full md:w-48 md:ml-10">
          
          <p className="text-gray-500">  #555</p>
        </div>
      </div>  





                  <div className='flex md:flex-row  md:w-96 flex-row mt-5 relative sm:ml-10 mb-10'>
        <img className='h-48 md:w-48 md:ml-10 cursor-pointer transition' src='https://lh3.googleusercontent.com/u/0/d/1QBpCmnZq00oyeuULfjkkJn5WAW73b18-=w1440-h692-iv2' alt='NFT'/>

        {/* Diviser l'image en deux parties */}
        <div className="absolute md:absolute md:inset-x-0  inset-x-0 md:mt-36     mt-36   md:bg-white    bg-white  md:p-4 
    p-4          w-full md:w-48 md:ml-10">
          
          <p className="text-gray-500">  #555</p>
        </div>
      </div>
          </div>
        </div>

        






      
      





        
        
      </div>
     
    
      

      
    
















     
    

    </div>



    
  );
}

export default NftDb;