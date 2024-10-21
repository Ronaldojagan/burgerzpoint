import React from 'react'
import Image1 from '../../images/home_slider_01.jpg'
import Image2 from '../../images/home_slider_02.jpg'
import Image3 from '../../images/home_slider_03.jpg'
import Image4 from '../../images/image_logo_02.png'
import Imgtop from '../../images/red_top_wave_01.png'
import Imgbottom from '../../images/cream_bottom_wave_01.png'
import Carousel from 'react-bootstrap/Carousel'
const bodycontent5 = () => {
  return (
    <>
    <img className='topimg' src={Imgtop} alt='top'/>
    <Carousel fade> 
      <Carousel.Item>
        <img src={Image1} className='dark' alt='1' text="First slide" />
       <Carousel.Caption className='caption'>
        <p className='cartxt1'>World Famous</p><br></br>
        <p className='cartxt2'>Burger</p>
        <img className='logo1' src={Image4}alt='logo'></img>
        <p className='logotxt'>100 % Grass-fed beef patty, cheddar cheese, special sauce,<br></br>tomato, pickles, lettuce, sesame seed bun</p>
        <div className='btntxt'>
           <p className='imgtxt2'>$12.00</p>
           220gr/600cal
         <button className='carouselbtn'>+</button>
       </div>
      </Carousel.Caption >
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image2} alt='1' text="First slide" />
        <Carousel.Caption className='caption'>
        <p className='cartxt1'>Popular </p><br></br>
        <p className='cartxt2'>ShroomBecon</p>
             <p className='logotxt'>100 % Grass-fed beef patty, cheddar cheese, special sauce,<br></br>tomato, pickles, lettuce, sesame seed bun</p>
        <div className='btntxt'>
           <p className='imgtxt2'>$12.00</p>
           220gr/600cal
         <button className='carouselbtn'>+</button>
       </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Image3} alt='1' text="First slide" />
        <Carousel.Caption className='caption'>
        <p className='cartxt1'>BestLocal</p><br></br>
        <p className='cartxt2'>TunaBurger</p>
        <img className='logo1' src={Image4}alt='logo'></img>
        <p className='logotxt'>100 % Grass-fed beef patty, cheddar cheese, special sauce,<br></br>tomato, pickles, lettuce, sesame seed bun</p>
        <div className='btntxt'>
           <p className='imgtxt2'>$12.00</p>
           220gr/600cal
         <button className='carouselbtn'>+</button>
       </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <img className='bottomimg' src={Imgbottom} alt='top'/>
  </>   
  )
}
export default bodycontent5;

