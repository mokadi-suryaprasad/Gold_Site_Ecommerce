import React, { useState } from 'react'
import './Sliders.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sliderItems } from '../data';
import { Link } from 'react-router-dom';


const Sliders = () => {
  const[slideIndex,setSlideIndex]= useState(0)
  const handleClick = (className) => {
    if (className === 'left_slide') {
      setSlideIndex(slideIndex>0 ? slideIndex-1 :2)
    } else {
      setSlideIndex(slideIndex<2 ? slideIndex+1 :0)
    }
     
   }
  return (
    <div className='containerslide'>
      
        <div className="left_slide" style={{ left: "10px" }} onClick={()=>handleClick('left_slide')} >
        <ArrowBackIosIcon/>
      </div>
      <div className="wrap" style={{transform: `translateX(-${slideIndex * 100}vw)`}}>
        {sliderItems.map((items)=>
      <div className="slides" style={{backgroundColor:items.bg}}  >
        <div className="imagebox">
          <img src={items.img} alt="" />
        </div>
        <div className="info">
              <h1>{items.title}</h1>
              <p>{items.desc} </p>
              
          <Link to='/productlist'><button>SHOP ME</button> </Link>
          </div>
          </div>
          )}
        </div>
      <div className="right_slide" style={{ right: "10px" }} onClick={() => handleClick('right_slide')}>
        <ArrowForwardIosIcon/>
        </div>
      
    </div>
  )
}

export default Sliders