import React from 'react'
import Image from '../../images/image_product_02 (1).jpg';
import Image2 from '../../images/product_04-640x640.jpg';
const bodycontent3 = () => {
  return (
    <div>
       <div className='container-1'>
            <div className=''data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" data-aos-duration="7000">
                <img className='container-img' src={Image} alt='1'></img>
                <div className='container-1text4'>$11.00</div>
                <div className='card1text5'>220gr/600 cal</div>
                <button className='card3button'>+</button>
              </div>


              <div className='card-conatiner-1' data-aos="fade-up"
                  data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                    <div className='card1text'> MEALS </div>
                    <div className='card1text2'> BaconBacon</div>      
                    <div className='card1text3'> CheeseBurger</div>  
                    <div>
                      <img className='card1img' src={Image2} alt='1' />
                      </div>  
                      <div className='card1text4'>$8.00</div>
                      <div className='card1text5'>220gr/600 cal</div>
                      <button className='card1button'>+</button>
              </div>
        </div> 


    </div>
  );
}
export default bodycontent3;