import React, { useState, useEffect, useRef } from "react";
import "./GreatDeals.css"; 
import deals1 from "../images/deals1.png"; 
import deals2 from "../images/deals2.png";
import deals3 from "../images/deals3.png";
import deals4 from "../images/deals4.png";

const Deals = () => {
  const images = [deals4, deals2, deals1, deals3]; 
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollAmount = 300; 
  const dealsContainerRef = useRef(null);

  useEffect(() => {
    if (dealsContainerRef.current) {
      dealsContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const scrollLeft = () => {
    if (dealsContainerRef.current) {
      if (scrollPosition === 0) {
        // If at start, jump to end instantly
        setScrollPosition(dealsContainerRef.current.scrollWidth - dealsContainerRef.current.clientWidth);
      } else {
        setScrollPosition((prev) => Math.max(prev - scrollAmount, 0));
      }
    }
  };

  const scrollRight = () => {
    if (dealsContainerRef.current) {
      if (scrollPosition >= dealsContainerRef.current.scrollWidth - dealsContainerRef.current.clientWidth) {

        setScrollPosition(0);
      } else {
        setScrollPosition((prev) => Math.min(prev + scrollAmount, dealsContainerRef.current.scrollWidth - dealsContainerRef.current.clientWidth));
      }
    }
  };

  return (
    <section className="great-deals">
      <h2>Buy now or regret later!</h2>
      <div className="deals-slider">
        <button className="slider-btn left" onClick={scrollLeft}>&#10094;</button>
        <div className="deals-container" ref={dealsContainerRef}>
          {images.map((img, index) => (
            <div key={index} className="deal">
              <img src={img} alt={`Deal ${index + 1}`} />
              <p>{["Buy 1 Get 42 free :)", "Purchase now, become a certified Python Developer", "Stop wasting time and buy", "Order broken items for free"][index]}</p>
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={scrollRight}>&#10095;</button>
      </div>
    </section>
  );
};

export default Deals;
