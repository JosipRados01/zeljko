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
            <h3>DOĐI I POMOLI SE</h3>
            <h2>RASPORED SVETIH MISA KROZ GODINU</h2>
            <p>
                Svete mise se Nedjeljom održavaju u xy sati, 
                dok su radnim danima mise u zy sati.
                Posjeti našu župu i osjeti blizinu Boga.<br></br>
                "Kad u koji grad uđete pa vas prime, jedite što vam se ponudi i liječite bolesnike koji su u njemu. I kazujte im: 'Približilo vam se kraljevstvo Božje!' "
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
