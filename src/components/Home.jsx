import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home(props) {
    // hooks
    const navigate = useNavigate();

    const goToSignUp = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/signup");
        }, 500);
    }

    return (
        <>
            <div className="landingPage">
                <div className="row d-flex justify-content-center align-items-center mx-0">
                    <div className="col-lg-5">
                        <h1>Send your messages in a more <strong> secured </strong> way</h1>
                        <p>Encryasmi is a web based application that hepls you to send encrypted messages.</p>
                        <button type="button" className="btn btn-outline-primary" onClick={goToSignUp}>Get Started</button>
                    </div>
                    <div className="col-lg-5">
                        <img src={process.env.PUBLIC_URL + "/imgs/bg.png"} className='landingPageImage animated' alt="Message social" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home