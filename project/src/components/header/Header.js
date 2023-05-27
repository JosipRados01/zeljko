import React, {useState, useEffect}  from 'react';
import searchIcon from "../../assets/images/search-line.svg"
import myAccountIcon from "../../assets/images/My Account icon.svg"
import shoppingBagIcon from "../../assets/images/Shopping bag icon.svg"
import ESPRO from "../../assets/images/ESPRO Logo.svg"
import logoZupe from "../../assets/images/logo.png"

function Header() {
  const [isScrolled, setScrolled] = useState(false);
  useEffect(()=> {
    
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  })
  }, [])

  let scrollclass = isScrolled ? 'hideBanner' : '';

  return (
    <div id='header' className={scrollclass}>
      <div className='headerBanner'><h3>Župa Svetog Luke - Novi grad</h3></div>
      <div className='flex-space-between' >
        <div className='container'>
            <div className='link'><a>O ŽUPI</a></div>
            <div className='link'><a>RED MISA</a></div>
        </div>
        <div className='container'>
            <figure className='logozupe'>
                <img src={logoZupe} alt='ESPRO' ></img>
            </figure>
        </div>
        <div className='container'>
            <div className='link'><a>NOVOSTI</a></div>
            <div className='link'><a>KONTAKT</a></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
