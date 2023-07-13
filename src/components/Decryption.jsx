import React, { useState } from 'react'
const cryptoJs = require('crypto-js')

function Decryption() {
    // state variables
    const [text, setText] = useState("");
    const [detext, setDecryptText] = useState("");
    const [secrettext, setSecretText] = useState("");


    // function
    const methodOnChange = (event) => {
        setText(event.target.value);
    }

    const copyText = () => {
        navigator.clipboard.writeText(detext);
        let txt = document.getElementById('textDisplayBox2');
        txt.select();
    }

    const clearTextarea = () => {
        setText("");
        setDecryptText("");
        setSecretText("");
    }

    const decryptText = () => {
        if (text.length === 0 || text === ' ') {
            setText("Please enter something");
            setDecryptText("Nothing to display");
            return

        } else {
            let spinnerHide = document.getElementById('LoadingSpinner');
            setDecryptText("Loading...");
            spinnerHide.style.display = "block";

            let decryptedMessage = cryptoJs.AES.decrypt(text, secrettext);
            try {
                decryptedMessage = decryptedMessage.toString(cryptoJs.enc.Utf8)
                // if not able to decrept the size will be zero so sending some message to user
                if (decryptedMessage.length < 1) {
                    decryptedMessage = "Unable to decrypt your message!";
                }
            } catch {
                decryptedMessage = "Unable to decrypt your message!"; // sending to user - if got an error while decrypting
            }

            // after X second the animation will turn off the display output
            setTimeout(() => {
                spinnerHide.style.display = "none"; // turn off spinner in {time} sec.
                setDecryptText(decryptedMessage);
                document.getElementById('textDisplayBox2').select()
            }, 2000);
        }
    }

    // private Key Input
    const secretOnChange = (e) => {
        setSecretText(e.target.value);
    }

    const showPrivateKeyInput = () => {
        const secretKey = document.getElementById("privateKeyInputField2");
        setSecretText(secretKey.value);

        if (secretKey.style.display === 'none')
            secretKey.style.display = 'block';
        else
            secretKey.style.display = 'none';
    }


    return (
        <>
            <div className="container my-4">
                <div className="d-flex align-items-center">
                    <h4 className='mt-4 headerText'>Decryption</h4>
                    {/* Loading spinner */}
                    <div className="spinner-grow" role="status" id='LoadingSpinner' style={{ display: "none" }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>

                <div className="row mt-4 titleFont">
                    <div className="col">
                        <h5 className='headerInfoColor'>Text to Decrypt</h5>
                        <div className="mb-3">
                            <textarea className="form-control boxBgColor" id="textInputBox" rows="5" placeholder='Start typing...' onChange={methodOnChange} value={text}></textarea>

                            <div className="d-flex mt-2 align-items-center justify-content-center">
                                <div className="form-check form-switch mx-2">
                                    <input className="form-check-input boxBgColor" type="checkbox" id="flexSwitchCheckDefault" onClick={showPrivateKeyInput} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Secret key</label>
                                </div>
                                <div>
                                    <input onChange={secretOnChange} value={secrettext} className="form-control boxBgColor" id="privateKeyInputField2" style={{ display: "none" }} type="text" placeholder="eg: frnd" />
                                </div>
                            </div>

                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="button" className="btn  btn-outline-primary mx-2" onClick={decryptText}>Start Decryption</button>
                            <button type="button" className="btn  btn-outline-primary" onClick={clearTextarea}>Reset</button>
                        </div>
                    </div>
                    <div className="col">
                        <h5 className='headerInfoColor'>Decrypted text</h5>
                        <div className="mb-3">
                            <textarea className="form-control boxBgColor" id="textDisplayBox2" rows="5" placeholder='Output window!' value={detext} readOnly></textarea>
                            <div className="d-flex justify-content-center">
                                <button type="button" className="btn btn-outline-primary mt-3" onClick={copyText}>Copy text</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Decryption