import React from 'react'
import pottery from '../images/pottery.png'

export default function Topcraftsmen()
{
    return(
        <>
            <h2 className='tc-head'>
                Order from our Top -5 Craftsmen of the month!
            </h2>
            <section className="tc-container">
        <div className="tc">
            <img src={pottery} alt="Pottery and Ceramics"/>
            <h2>Pottery and Ceramics</h2>
            <p>2000+ tcs</p>
            <button className="add-to-cart">View tcs</button>
        </div>
        <div className="tc">
            <img src={pottery} alt="Handwoven Silk"/>
            <h2>Handwoven Silk</h2>
            <p>1500+ tcs</p>
            <button className="add-to-cart">View tcs</button>
        </div>
        <div className="tc">
            <img src={pottery} alt="Terracotta Toys"/>
            <h2>Terracotta Toys</h2>
            <p>1000+ tcs</p>
            <button className="add-to-cart">View tcs</button>
        </div>
        <div className="tc">
            <img src={pottery} alt="Terracotta Toys"/>
            <h2>Terracotta Toys</h2>
            <p>1000+ tcs</p>
            <button className="add-to-cart">View tcs</button>
        </div>
        <div className="tc">
            <img src={pottery} alt="Terracotta Toys"/>
            <h2>Terracotta Toys</h2>
            <p>1000+ tcs</p>
            <button className="add-to-cart">View tcs</button>
        </div>
    </section>
        </>
    )
}