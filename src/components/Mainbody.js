import React from 'react'
import './Mainbody.css'
import shoe from '../images/shoe.png'
import amazon from '../images/amazon.png'
import flipkart from '../images/flipkart.png'
export default function Mainbody() {
  return (
    <div className='maindiv'>
      <main className='main'>
        <div className='mainContent'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
               SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
               SHOES.
            </p>
            <div className="mainBtn">
                <button>Shop Now </button>
                <button className='secondarybtn'>Category</button>
            </div>
            <div className="shopping">
                <p>Also available on</p>
                <div className='icon'>
                    <img src={flipkart} alt="" />
                    <img src={amazon} alt="" />
                </div>
            </div>
        </div>
        <div className="mainImg">
            <img src={shoe} alt="" />
        </div>
      </main>
    </div>
  )
}
