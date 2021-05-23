import React, {useState, useEffect} from 'react'
import './Alert.css';


function Alert({visible,setVisible}) {   

    return (
        <div>
        {visible && 
        <div className="alert_outside" onClick={setVisible}>
            <div className="alert">
                <div className="alert_textarea">
                <h3>Merhaba,</h3>
                <h3>Ben Fikret Sefa</h3>
                <h3>Netflix Clone Turkey, React yetkinliklerini geliştirmek için üretilmiştir.</h3>
                <h3>Kaynak kodu ve kullanılan teknolojiler için github adresimi ziyaret et!</h3>
                </div>
                
                
                <div className="alert_icons">
                <a className="alert_icon" href="https://www.linkedin.com/in/fikretsefa/"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a className="alert_icon" href="https://github.com/fikretsefa/"><ion-icon name="logo-github"></ion-icon></a>
                <a className="alert_icon" href="mailto:fikretsefa@gmail.com?"><ion-icon name="mail"></ion-icon></a>
                <a className="alert_icon" onClick={setVisible}><ion-icon name="close-outline"></ion-icon></a>
                </div>

                <span>Web sürümünde <div className="alert_age">shift + scroll</div> ile geçiş yapabilirsiniz.</span>

            </div>
            </div>
        }
        </div>
    )
}

export default Alert
