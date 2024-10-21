import React from 'react'
import Image1 from '../../images/product_01.png';
import Image2 from '../../images/product_02.jpg';
import Image3 from '../../images/image_product_01.jpg';


const bodycontent2 = () => {
  return (
    <div>
      
        <div className='cardcontainer'>
            <div className='card1' data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom" data-aos-duration="1000">
                 <div className='card1text'> BEEF </div>
                  <div className='card1text2'> Bacon+Cheese</div>      
                  <div className='card1text3'> + Green Burger</div>  
                  <div >
                    <img className='card1img' src={Image1} alt='1' />
                    </div>  
                <div className='card1text4'>$6.00</div>
                <div className='card1text5'>220gr/600 cal</div>
                <button className='card1button'>+</button>
                
            </div>

            <div className='card1' data-aos="fade-up"
                   data-aos-anchor-placement="top-bottom" data-aos-duration="1500">
                  <div className='card1text'> BEEF </div>
                  <div className='card1text2'> BlackAngus</div>      
                  <div className='card1text3'> Burger</div>  
                  <div >
                    <img className='card1img' src={Image2} alt='1' />
                    </div>  
                <div className='card1text4'>$12.00</div>
                <div className='card1text5'>220gr/600 cal</div>
                <button className='card1button'>+</button>
            </div>

            <div className='card3' data-aos="fade-up"
                 data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
                  <div className='card2text'> BEEF </div>
                  <div className='card2text2'> Bacon+Cheese</div>      
                  <div className='card2text3'> + Green Burder</div>  
                  <div >
                    <img className='card2img' src={Image3} alt='1' />
                    </div>  
                <div className='card2text4'>$6.00</div>
                <div className='card2text5'>220gr/600 cal</div>
                <button className='card1button1'>+</button>
            </div>
           </div>    
   
</div>
  );
}
export default bodycontent2;
