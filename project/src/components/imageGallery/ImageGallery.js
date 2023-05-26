import React, { useEffect } from 'react';
import imagesArray from "./images.json"
import AppearingDots from './AppearingDots';

function ImageGallery() {

    useEffect(() => {

        const images = document.querySelectorAll('[class^="galleryImage"]');
    
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
            rootMargin : "-200px"
        })
    
        images.forEach(image => {observer.observe(image)})
        }, [])
  return (
    <div id='imageGallery'>
        <div className='galleryText' >
            <h3>DESIGNED FOR REAL LIFE</h3>
            <h2>COFFEE MADE FOR YOUR LIFE ON THE GO.</h2>
            <p>
                We understand coffee is a big part of your busy, active life. 
                That's why we create and develop products that allow you to bring your passion for 
                <strong> coffee-when you want it-</strong> and wherever life takes you.
            </p>
            <AppearingDots numberOfDots={30} divID={"galleryDots"} ></AppearingDots>
        </div>

        {imagesArray.map(element => 
            <figure className={`galleryImageNumber${element.index}`} >
                <img src={element.src}></img>
            </figure>
        )}

    </div>
  );
}

export default ImageGallery;
