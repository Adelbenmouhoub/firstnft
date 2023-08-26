import Slider from 'react-infinite-logo-slider'

const Rookie = () => {
    
    return (
        <Slider
            width="230px"
          aligne-items='center'
            duration={10}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#fff'}
        >
            <Slider.Slide>
                <img  src="https://1000logos.net/wp-content/uploads/2022/03/Coinbase-logo.png" alt="any2" className='w-36 mr-11' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://www.pngmart.com/files/23/Shopify-Logo-PNG-File.png" alt="any2" className='w-36' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://logo-marque.com/wp-content/uploads/2020/04/Amazon-Logo.png" alt="any3" className='w-36' />
            </Slider.Slide>


          

          <Slider.Slide>
                <img src="https://www.freepnglogos.com/uploads/original-samsung-logo-10.png" alt="any3" className='w-36' />
            </Slider.Slide>

          <Slider.Slide>
                <img src="https://www.freepnglogos.com/uploads/android-logo-png/android-logo-0.png" alt="any3" className='w-36' />
            </Slider.Slide>

          <Slider.Slide>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ethereum_logo_2014.svg/1257px-Ethereum_logo_2014.svg.png" alt="any3" className='w-14' />
            </Slider.Slide>



          <Slider.Slide>
            <div className='flex flex-row'>
            <img src="https://www.rainbowkit.com/rainbow.svg" alt="any3" className='w-14' />
              <h1 className='bold ml-2 flex flex-row items-center text-white text-[20px]'>RainbowKit</h1>
            </div>
                
            </Slider.Slide>
          
        </Slider>
    )
}              
                     
export default Rookie;
