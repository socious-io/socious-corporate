import React, { useEffect } from 'react'

const ScrollArrow = () => {
  useEffect(() => {
    const scrollArrow = document.getElementById("scroll-arrow");

    const myScrollFunc = () => {
      let y = window.scrollY;
      if (y >= 800) {
        scrollArrow.className = "scroll-arrow up show"
      } else {
        scrollArrow.className = "scroll-arrow up hide"
      }
    };

    window.addEventListener("scroll", myScrollFunc);
  })


  return (
    <div>
      <a href="#scroll-top">
        <i id="scroll-arrow" className="scroll-arrow up hide"></i>
      </a>
    </div>
  )
}

export default ScrollArrow
