import React from 'react'
import { useState,useEffect } from 'react'
import './BackToTop.css'

const BackToTop = () => {
    const [isVisible,setIsVisible]=useState(false);
    const toggleVisibilitty=()=>{
        if(window.pageYOffset>900){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
    const scrollToTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }

    useEffect(()=>{
        window.addEventListener("scroll",toggleVisibilitty);
        return()=>{
            window.removeEventListener("scroll",toggleVisibilitty)
        }
    })
  return (
    <div className="scroll-to-top">
        
            {isVisible && (
                <div className="back-top-container" onClick={scrollToTop}>
                Back To Top
                </div>
            )}
        </div>
    
  )
}

export default BackToTop