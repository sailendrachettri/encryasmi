import React from 'react'

function Headertext() {
  return (
    <>
      <div className="container">
        <h3 className='mt-4'>Ency - A tool to encrypt & decrypt text</h3>
        <div className='my-2'>
          <p> Encryption is the process by which a readable message is converted to an unreadable form to prevent unauthorized parties from reading it.
            Decryption is the process of converting an encrypted message back to its original (readable) format. </p>
          <p>The original message is called the plaintext message. The encrypted message is called the ciphertext message.</p>
        </div>
      </div>
    </>
  )
}

export default Headertext