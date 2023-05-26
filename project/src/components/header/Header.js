import React, {useState, useEffect}  from 'react';
import searchIcon from "../../assets/images/search-line.svg"
import myAccountIcon from "../../assets/images/My Account icon.svg"
import shoppingBagIcon from "../../assets/images/Shopping bag icon.svg"
import ESPRO from "../../assets/images/ESPRO Logo.svg"

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
      <div className='headerBanner'><h3>FREE SHIPPING ON ALL U.S. ORDERS $49+</h3></div>
      <div className='flex-space-between' >
        <div className='container'>
            <div className='link'><a>SHOP</a></div>
            <div className='link'><a>OUR STORY</a></div>
        </div>
        <div className='container'>
            <figure>
                <img src={ESPRO} alt='ESPRO' ></img>
            </figure>
        </div>
        <div className='container'>
            <div className='link'><a>BREW GUIDES</a></div>
            <div className='link'><a>BLOG</a></div>
            <div className='link'><a><img src={searchIcon} alt='search'></img></a></div>
            <div className='link'><a><img src={myAccountIcon} alt='user'></img></a></div>
            <div className='link'><a><img src={shoppingBagIcon} alt='buy'></img></a></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
