import type { NextPage } from 'next'
import Head from 'next/head'
import InfoModel from '../components/infoModel'
import useInfoModel from '../components/hooks/UseInfoModel'





const Home: NextPage = () => {
  const {ilestouvert, CloseModel} = useInfoModel();
  
  return (
    <div>
      <InfoModel visibel={ilestouvert} onClose={CloseModel} />
   
   <Head>
        <title>nft</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      
      
    </div>
  )
}

export default Home