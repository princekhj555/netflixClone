import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router-dom';
import './Nav.css'
import logo from "./logo(1).png"
function Nav() {
    const [show, handleShow] = useState(false);
    const history =useHistory()
    const transitionNavBar =() =>{
        if(window.scrollY>100)
        handleShow(true);
        else handleShow(false);
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionNavBar);
        return () => {
            window.removeEventListener("scroll",transitionNavBar)
        }
    }, []);
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <div className="nav_contents">
            <img 
            onClick={()=>history.push('/')}
                className="nav_logo"
                 src={logo} alt="Netflix Logo"/>
            
            <img
              className="nav_avatar" 
              onClick={()=>history.push('/profile')}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
            alt="avatar"/>

            </div>
           
        </div>
    )
}

export default Nav