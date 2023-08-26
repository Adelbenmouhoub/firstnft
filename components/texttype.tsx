import { TypeAnimation } from 'react-type-animation';



const TextType = () => {
  return(
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We sell Nft',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We sell gaming',
        1000,
        'We sell product',
        1000,
        'We sell collection',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5em', display: 'inline-block', color: 'white' }}
      repeat={Infinity}
    />
  )
}

export default TextType