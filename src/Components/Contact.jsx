import React from 'react'
import touch from '../assets/IMAGES/geintouch.png'

export const Contact = () => {
  return (
    <>
    
    <section className='contact'>
        <div className="contact-container">
              <img src= {touch} alt="" />
             <div className="contact-text">
                <h1>Get ln Touch With Us</h1>
                <p>Have an enquiry or some feedback for us</p>
                <p>Fill out the form Below to contact our team</p>
                <div className="input-group">
                  <form action="">
                  <input type="text" placeholder='your name'/>
                  <input type="number" placeholder='your phone number' name="" id="" />
                  <input type="email" placeholder='your email address' name="" id="" />
                    <div className="input-group1">
                  <textarea name="text" placeholder='your message' id="" cols="10" rows="10"></textarea>
                  <input type="submit" value="Submit" className='btn' />
                  </div>
                  </form>
                </div>
             </div>
        </div>
    </section>
    </>
  )
}
