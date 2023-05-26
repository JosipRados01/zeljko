import React, { useEffect } from 'react';

function AppearingDots({numberOfDots, divID}) {
    useEffect(() => {

    const dotsDiv = document.getElementById(divID);
    const dots = dotsDiv.childNodes

    const observer = new IntersectionObserver( (entries)=> {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add("show")
            }
            else {
                entry.target.classList.remove("show")
            }
        })
    }, {
        rootMargin : "-100px"
    })

    dots.forEach(dot => {observer.observe(dot)})
    }, [])

  return (
    <div id={divID}>
        {Array(numberOfDots).fill().map( () => {
            return (
                <div className='dot'></div>
            )   
        })}
    </div>
  );
}

export default AppearingDots;
