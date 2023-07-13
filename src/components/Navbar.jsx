import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar(props) {
    // global variable
    let white = '#e0dbfc'
    let dark = '#2b3035'

    // state variables
    const [bgmode, setBgmode] = useState({
        color: dark,
        backgroundColor: white
    })
    const [btnText, setBtnText] = useState("Enable dark mode")

    const darkModeToggle = () => {
        let boxBgColor = document.getElementsByClassName('boxBgColor')


        if (bgmode.color === dark) {
            setBgmode({
                color: white,
                backgroundColor: dark
            })

            for (let i = 0; i < boxBgColor.length; i++) {
                boxBgColor[i].style.backgroundColor = dark;
                boxBgColor[i].style.color = white
            }

            document.getElementById('footer').style.backgroundColor = dark
            document.body.style.backgroundColor = dark
            document.body.style.color = white

            setBtnText("Enable light mode")

        } else {
            setBgmode({
                color: dark,
                backgroundColor: white
            })

            for (let i = 0; i < boxBgColor.length; i++) {
                boxBgColor[i].style.backgroundColor = white;
                boxBgColor[i].style.color = dark
            }

            document.getElementById('footer').style.backgroundColor = white
            document.body.style.backgroundColor = white
            document.body.style.color = dark
            setBtnText("Enable dark mode")
        }
    }

    // hooks
    const navigate = useNavigate();


    const goToHome = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/");
        }, 500);
    }

    const goToEncyDency = () => {

        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100)
            navigate('/encrydecry')
        }, 500)

    }

    const goToAbout = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/about");
        }, 500);
    }

    return (
        <>
            <nav className={`navbar navbar-expand-lg pt-0`} >
                <div className="container-fluid py-2" >
                    <p className="navbar-brand logo" role='button' > <span onClick={goToHome} > Encryasmi</span></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <p className={`nav-link ${window.location.pathname === "/encrydecry" ? "active" : ""}`} aria-current="page" role='button' onClick={goToEncyDency} style={bgmode}>Home</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link ${window.location.pathname === "/about" ? "active" : ""}`} role='button' onClick={goToAbout} style={bgmode}>Developer</p>
                            </li>
                        </ul>

                        {/* Toggle switch - dark mode and light mode */}
                        {window.location.pathname === '/encrydecry' ? <div className="form-check form-switch">
                            <input className="form-check-input boxBgColor" type="checkbox" role="switch" onClick={darkModeToggle} id="toggleDarkMode" />
                            <label className="form-check-label" htmlFor="toggleDarkMode">{btnText}</label>
                        </div> : ""}
                    </div>
                </div>
            </nav >
        </>
    )
}

export default Navbar