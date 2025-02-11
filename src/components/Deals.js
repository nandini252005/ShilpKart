import React from 'react'
import deals1 from '../images/deals1.png'
import deals2 from '../images/deals2.png'
import deals3 from '../images/deals3.png'
import deals4 from '../images/deals4.png'
export default function Deals()
{
    return(
      <>
      <section className="great-deals">
      <h2>Your Great Deals are here!</h2>
      <div className="deals-slider">
          <button className="slider-btn left" onclick="prevSlide()">&#10094;</button>
          <div className="deals-container">
              <div className="deal">
                  <img src={deals4} alt="Deal 1" />
                  <p>Silk Sales!</p>
              </div>
              <div className="deal">
                  <img src={deals2} alt="Deal 2" />
                  <p>Buy 1 Ceramic Get 1 Free</p>
              </div>
              <div className="deal">
                  <img src={deals1} alt="Deal 3" />
                  <p>Discounted Fabrics</p>
              </div>
              <div className="deal">
                  <img src={deals3} alt="Deal 3" />
                  <p>Discounted Fabrics</p>
              </div>
              
          </div>
          <button className="slider-btn right" onclick="nextSlide()">&#10095;</button>
      </div>
  </section>

        </>
    )
}