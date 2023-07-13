import React from 'react'

function About() {
    return (
        <>
            <div className="container mt-5" style={{ height: "80vh" }}>
                <div className="container d-flex">
                    <div className='col d-flex justify-content-center align-items-center'>
                        <img src={process.env.PUBLIC_URL + "/imgs/me11.png"} className='aboutMeImg animated' alt="Message social" />
                    </div>
                    <div className="col d-flex align-self-end flex-column">
                        <h3 className='headerText2'>Hello World!</h3>
                        <p> I'm <strong> Sailendra Chettri </strong> a B Voc (SD) student studying at NBBGC Tadong.</p>
                        <p>Computers and programming have always fascinated me since when I was first introduced to them. I started learning to code when I got into college, our prof. taught us everything; from printing hello world! to building some useful stuff.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About