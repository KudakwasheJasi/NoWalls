import React from 'react'
import listing from '../assets/IMAGES/mail-listing.png'

export const Subscribe = () => {
  return (
    
    <>
     <div className="subscribe">
        <div className="sub-container">
    <h1>Let's create brands & products<pre>People will love!</pre></h1>
      <div className="sub-image">
        <img src= {listing} alt="" />
      </div>
    </div>
    </div>
    <div className="button-group">
    <button>Subscribe To Mail Listing</button>
    </div>
    </>
  )
}
export default Subscribe