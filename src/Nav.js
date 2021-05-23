import React, {useState, useEffect} from 'react'
import './Nav.css';


function Nav({}) {
    const [show,setShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if(window.scrollY > 100){
                setShow(true);
            }
            else{
                setShow(false);
            }
        });
        return () => {
            //window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
                <img 
                className="nav_logo"
                src="icon.png" 
                alt="Netflix Logo"/>

                <div className="nav_icons">
                <ion-icon name="search"></ion-icon>
                <ion-icon name="gift-outline"></ion-icon>
                <ion-icon name="notifications"></ion-icon>
                </div>
                
                <img 
                className="nav_avatar"
                src="profile.png" 
                alt="Profile Logo"/>        
        </div>
    )
}

export default Nav;
