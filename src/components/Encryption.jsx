import React, { useState } from 'react'
import { Link } from 'react-router-dom';
const cryptoJs = require('crypto-js')

function Encryption() {
    // state variables
    const [text, setText] = useState(""); // original text to encrypt
    const [entext, setEncryptText] = useState(""); // encrypted text
    const [phonenumber, setPhonenumber] = useState(""); // set mobile number
    const [message, setMessage] = useState(" "); // set the message to send in whatsapp
    const [secrettext, setSecretText] = useState("");

    // function
    const methodOnChange = (event) => {
        setText(event.target.value);
    }
    const onChangePhone = (event) => {
        setPhonenumber(event.target.value);
    }

    const clearTextarea = () => {
        setText("");
        setEncryptText("");
        setMessage(" ");
        setSecretText("");
        setPhonenumber("");
    }

    const sendMessage = () => {
        let initial = 91;
        let phone = document.getElementById('whatsAppNumberInput').value;
        let initialAndPhone = initial + phone;

        initialAndPhone = parseInt(initialAndPhone);
        setPhonenumber(initialAndPhone);

        if (message === " ")
            setMessage("Hey!");
        else
            setMessage(entext);
    }

    const encryptText = () => {
        if (text.length === 0 || text === ' ') {
            setText("Please enter something");
            setEncryptText("Nothing to display");
            return

        } else {
            let spinnerHide = document.getElementById('LoadingSpinner2');
            setEncryptText("Loading..."); // when encryption starts - clear the output window
            spinnerHide.style.display = "block";

            let encryptedMessage = "";
            try {
                encryptedMessage = cryptoJs.AES.encrypt(text, secrettext);
            } catch {
                encryptedMessage = "Unable to encrypt your message!"
            }

            // after X seconds the message will display - animating delay
            setTimeout(() => {
                spinnerHide.style.display = "none"; // turn off spinner in {time} sec.
                setEncryptText(encryptedMessage);

                // selecting the encrypted box and extrecting text
                document.getElementById('textDisplayBox').select()
                navigator.clipboard.writeText(encryptedMessage); // copy the encrypted text to clipboard
            }, 2000);

            setMessage(encryptedMessage); // setting msg as encrypted text
        }
    }

    // private Key Input
    const secretOnChange = (e) => {
        setSecretText(e.target.value);
    }

    const showPrivateKeyInput = () => {
        const secretKey = document.getElementById("privateKeyInputField");
        setSecretText(secretKey.value);

        if (secretKey.style.display === 'none')
            secretKey.style.display = 'block';
        else
            secretKey.style.display = 'none';
    }



    return (
        <>
            <div className="container my-4 my-4">
                <div className="d-flex align-items-center">
                    <h4 className='mt-4 headerText'>Encryption</h4>
                    {/* Loading spinner */}
                    <div className="spinner-grow" role="status" id='LoadingSpinner2' style={{ display: "none" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col">
                        <h5 className='headerInfoColor paraFont'>Text to Encrypt</h5>
                        <div className="mb-3">
                            <textarea className="form-control boxBgColor" id="textInputBox" rows="5" placeholder='Start typing...' onChange={methodOnChange} value={text}></textarea>

                            <div className="d-flex mt-2 align-items-center justify-content-center">
                                <div className="form-check form-switch mx-2" >
                                    <input className="form-check-input boxBgColor" type="checkbox" id="addSecretCheck" onClick={showPrivateKeyInput} />
                                    <label className="form-check-label" htmlFor="addSecretCheck">Secret key</label>
                                </div>
                                <div>
                                    <input onChange={secretOnChange} value={secrettext} className="form-control boxBgColor" id="privateKeyInputField" style={{ display: "none" }} type="text" placeholder="eg: codzz" />
                                </div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn btn-outline-primary mx-2" onClick={encryptText}>Start Encryption</button>
                            <button type="button" className="btn btn-outline-primary" onClick={clearTextarea}>Reset</button>
                        </div>
                    </div>

                    <div className="col">
                        <h5 className='headerInfoColor'>Encrypted text</h5>
                        <div className="mb-3">
                            <textarea className="form-control boxBgColor" id="textDisplayBox" rows="5" placeholder='Output window!' value={entext} readOnly></textarea>

                            <div className="d-flex align-items-center justify-content-center mt-4">
                                {/* <button type="button" className="btn btn-outline-primary" onClick={copyText}>Copy text</button> */}
                                <div className="col-auto mx-2">
                                    <input type="number" className="form-control boxBgColor" onChange={onChangePhone} style={{ borderRadius: "0px 12px" }} id="whatsAppNumberInput" placeholder="Enter number to text" />
                                </div>
                                {/*https://api.whatsapp.com/send/?phone=${phonenumber}&text=${message}&type=phone_number&app_absent=0`}  */}
                                <Link aria-label="Chat on WhatsApp" to={`https://web.whatsapp.com/send/?phone=${phonenumber}&text=${message}&type=phone_number&app_absent=1`} target='_blank'>
                                    <span className="material-symbols-outlined" onClick={sendMessage}  > Send </span>
                                </Link>
                            </div>


                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Encryption