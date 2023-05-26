import React from 'react';
import "./Footer.css";
import ESPRO from "../../assets/images/whiteEsproLogo.svg"
import facebook from "../../assets/images/facebook.svg"
import instagram from  "../../assets/images/instagram.svg"
import twitter from "../../assets/images/twitter.svg"

//ovdje imagesArray mora imati paran broj slika
function Footer() {

  return (
    <div id='footer'>
        <div className='neverMissADrop'>
            <div>
                <h2>
                NEVER MISS A DROP.
                </h2>
                <p>
                Sign up to be the first to know about exclusive <br></br> new deals, product launches and more.
                </p>
            </div>
            <div className='fg07'>
                <form className='nmdform'>
                    <input type='email' placeholder='Enter your email address' ></input>
                    <input type='submit'></input>
                </form>
            </div>
        </div>
        <div className='tackice'>
            {Array(30).fill().map(()=> (
                <div className='tackica'> </div>
            ))}
        </div>
        <div className='links'>
            <div className='logoDiv'>
                <figure><img src={ESPRO} ></img></figure>
                <p><strong>We’re here to help.</strong><br></br>
                service@espro.com <br></br>
                 1.844.377.7622
                </p>
            </div>
            <div>
                <h3>LEARN</h3>
                <a>Blog</a>
                <a>Our Story</a>
                <a>Brew Guides</a>
                <a>Retailers</a>

            </div>
            <div>
                <h3>SUPPORT</h3>
                <a>FAQ</a>
                <a>Shipping & Returns</a>
                <a>Our Gurantee</a>

            </div>
            <div>
                <h3>COMPANY</h3>
                <a>Contact us</a>
                <a>Join Us</a>
                <a>Press</a>

            </div>
            <div>
                <h3>CONNECT WITH US</h3>
                <div className='socials' >
                    <a><figure> <img src={facebook} ></img> </figure> </a>
                    <a> <figure> <img src={instagram} ></img> </figure> </a>
                    <a> <figure> <img src={twitter} ></img> </figure> </a>
                </div>

            </div>
        </div>
        <div className='kraj'>
            <span>Copyright © 2021 Espro Inc.</span>
            <div>
                <span>Terms & Privacy</span>
                <span>Patents</span>
            </div>
        </div>
    </div>
  );
}

export default Footer;
