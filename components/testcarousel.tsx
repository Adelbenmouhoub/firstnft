import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";






const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



const TestCarousel = () => {
  return (
    <div>







     





      <Carousel responsive={responsive}
      autoPlay
      autoPlaySpeed={3000} // Définissez le délai entre chaque changement d'image (en millisecondes)
      className='space-x-4'>
  <div className=''>
  <img className='rounded-lg' src='https://wallpaperaccess.com/full/8054251.jpg' />
  </div>
   <div>
  <img className='rounded-lg' src='https://play-lh.googleusercontent.com/jywi2jOCuEW14D1fdTOFZI2ZXZKEpjN0iKCxoZWrP3UR3HObyxJN7xv9D6vT752lLQ' />
  </div>

   <div>
  <img 
 className='rounded-lg'src='https://i.pinimg.com/550x/88/21/80/8821809e23c28fbc2c35795ee4bed294.jpg' />
  </div>

   <div>
  <img className='rounded-lg'src='https://i.pinimg.com/736x/dc/51/31/dc51310ee011f51686f3a0c6c54023a1.jpg' />
  </div>

   
</Carousel>




       
</div>
      

  )
}

export default TestCarousel