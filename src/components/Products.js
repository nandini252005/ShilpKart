import React from 'react'
import pottery from '../images/pottery.png'
import gem from '../images/gem.png'
import toy from '../images/toy.png'
import wood from '../images/wood.png'
import leaf from '../images/leaf.png'
import metal from '../images/metal.png'
import glass from '../images/glass.png'
import wool from '../images/wool.png'



export default function Products()
{
    return(
        <>
        <h2 className='products-head'>
            Explore our Handcrafted Products
        </h2>
              <section className="product-container">
        <div className="product">
            <img src={pottery} alt="Pottery and Ceramics"/>
            <h2>ClayDew</h2>
            <p>A delicate pottery piece that brings nature’s freshness indoors.</p>
            <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product">
            <img src={toy} alt="Terracotta Toy"/>
            <h2>TerraSculpt</h2>
            <p>A terracottaa sculpture with elegant, earthy design.</p>
            <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product">
            <img src={gem} alt="Jewelry"/>
            <h2>GemCharm</h2>
            <p>A handcrafted jewelry piece that radiates elegance and artistry.</p>
            <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product">
            <img src={wood} alt="Crafted Wood"/>
            <h2>WoodWhispers</h2>
            <p>Crafted from wood, reflecting artistry and nature.</p>
           <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product">
            <img src={leaf} alt="Leaves"/>
            <h2>LeafTales</h2>
            <p>A touch of nature, woven into every piece.</p>
           <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product">
            <img src={metal} alt="Crafted metal"/>
            <h2>MetalAura</h2>
            <p>Intricate metal pieces whisper stories of strength and beauty.</p>
           <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product">
            <img src={glass} alt="Crafted Glass"/>
            <h2>GlassGlimmer</h2>
            <p>Handcrafted glass creations that sparkle with artistry and elegance.</p>
           <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product">
            <img src={wool} alt="Wool"/>
            <h2>CozyCraft</h2>
            <p>Warmth and elegance in every comforting stitch.</p>
           <p className='price'>Price : 900/-</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    </section>
        
        </>
    )
}