import React from 'react'
import address from '../assets/IMAGES/NoWallsLogo.png'

const Address = () => {
  return (
 
    <>
    
    <section className='Address'>
        <div className="address-container">
            <div className="address-text">
                <h1>NoWalls Pan Africa, Dare To Differ</h1>
                  <div className="address-text1">
                <p>67 Heritage House</p>
                <p>Samora Machel,</p>
                <p>Harare</p>
                </div>
                <div className="address-text2">
                    <p>+263778793029</p>
                </div>
            </div>
        </div>
        <div className="address-logo">
              <img src= {address} alt="" />
            </div>
    </section>
    </>
  )
}

export default Address