import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import NameScroll from '../components/NameScroll'
import NftDb from '../components/nftdb';
import Rookie from '../components/slider';
import Footer from '../components/footer'
import TestCarousel from '../components/testcarousel';
import TextType from '../components/texttype';
import NftText from '../components/nfttext';
import TrustText from '../components/trustetext';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header /> {/* Ajoutez le composant ici */}
      <div className="flex flex-row mt-20">
      <NameScroll />
        


        
        
         
      </div>


 <div className='flex flex-row md:ml-10 ml-5 mt-10 sm-ml-10'>
        <TextType />
        </div>
     

      <div className="mt-8 mb-8">
      <TestCarousel />



        
      
      
      </div>


      <div className=''>
      <NftText />
      </div>

       <div className=''>
       <NftDb />




         
         
       </div>


<div className='ml-24 mb-11'>
<TrustText />
</div>

      <div className='mb-14'>
      <Rookie />
      </div>
      
      



      
       <div className=''>
         <Footer />
       </div>


      <div className=''>
      
      </div>
      
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
