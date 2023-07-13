import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login(props) {
    // states
    const [credendials, setCredentials] = useState({ email: "", password: "" })

    // hooks
    const navigate = useNavigate()

    // methods
    const goToSignUp = () => {
        // top loading bar progress
        props.setProgress(50);
        setTimeout(() => {
            props.setProgress(100);
            navigate("/signup");
        }, 500);
    }

    const validateAndLoggedInUser = async (e) => {
        props.setProgress(50);
        e.preventDefault()
        // user validation
        const response = await fetch("http://localhost:5000/v1/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credendials.email, password: credendials.password })
        })
        const json = await response.json()

        if (json.success) {
            props.setProgress(100);
            // save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            navigate("/encrydecry")

            const displayUser = document.getElementById('displayUser');
            displayUser.innerHTML = credendials.email

        }
        else {
            props.setProgress(100);
            alert("Invalid credendials")
        }
    }

    const onChangeMethod = (e) => {
        setCredentials({ ...credendials, [e.target.name]: e.target.value })
    }

    return (
        <>
            <form onSubmit={validateAndLoggedInUser}>
                <div className="justify-content-center d-flex align-items-center" style={{ height: "78vh" }}>
                    <div className="container w-50 shadow p-3 mb-5 rounded">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" value={credendials.email} name='email' onChange={onChangeMethod} className="form-control boxBgColor" id="loginEmail" placeholder="john@email.com" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" value={credendials.password} name='password' onChange={onChangeMethod} className="form-control boxBgColor" id="loginPassword" placeholder="password" />
                        </div>
                        <div className="d-grid gap-2 col-4 mx-auto">
                            <button className="btn btn-sm btn-outline-primary" type="submit">Login</button>
                            <p>Don't have an account? <span className='customHref' onClick={goToSignUp}> Create </span> here</p>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Login