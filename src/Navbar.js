import './navbar.css';
import logo from './logo.svg';
import {links, social} from './data.js';
// import social from './data.js';
import { useState, useRef, useEffect } from 'react';
import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';



export default function Navbar(){

    // let yukseklik = "auto";
    const [yukseklik, setYukseklik] = useState("auto");

    const  [menulinkler, setMenulinkler] = useState(links);
    const  [sociallinkler, setSociallinkler] = useState(social);

    // useEffect(()=>{window.addEventListener("resize", ()=>{
    //     if(window.innerWidth > 800) setMenugoster(true);
    // })},[]);

    return(
        <div className='navbarCover'>

            <div className='logoArea'>
                <img className="logoimg" src={logo} alt="gereksiz"/>

                <div className='hamburgermenu' onClick={()=>{
                    if(yukseklik === "gizle") {
                        setYukseklik("goster");
                    }else{
                        setYukseklik("gizle");
                    }
                // setMenugoster(!menugoster);
                }}>
                    <HiMenu/>
                </div>
            </div>


            {/* <span style={{display:"none"}}>{ menugoster ? yukseklik = "auto" : yukseklik = "0px"}</span> */}

            {/* style={{height:yukseklik}} */}
             <div className={'menuArea ' + yukseklik } >
            {menulinkler.map((item, index)=>{
                return <a className='menulink' key={index} href={"localhost:3000" + item.url}>{item.text}</a>
            })}
            </div>

            <div className='socialLinksArea'>
            
            {sociallinkler.map((item, index)=>{
                return <a className='sociallink' key={index} href={item.url}>{item.icon}</a>
            })}
            </div>

            
        </div>
    )
}