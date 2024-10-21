import React from 'react'

import Image2 from '../../images/product_08-640x640-removebg-preview.png'
import image3 from '../../images/image_product_03.jpg'

const bodycontent4 = () => {
  return (
    <>
    <div className='containercontent-4'>
        <div className="content4card1" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
              <div className='card1text'> VEGAN </div>
                  <div className='card4text2'> ShroomBacon</div>      
                  <div className='card1text3'> Burger</div>  
                  <div >
                    <img className='cardimg1' src={Image2} alt='1' width='300px' height='300px' />
                    </div>  
                <div className='cardtext4'>$8.00</div>
                <div className='card1text5'>220gr/600 cal</div>
                <button className='cardbutton1'>+</button>
              
        </div>
        <div className="content4img1" data-aos="fade-up"
               data-aos-anchor-placement="top-bottom" data-aos-duration="1000"> 
              <img className='container-img' src={image3} alt='1' ></img>
              <div className='container-1text4'>$11.00</div>
              <div className='card1text5'>220gr/600 cal</div>
              <button className='card3button3'> +</button>
            </div>   
        </div>
        
    </>    
  );
}
export default bodycontent4;