import React from 'react'
import data from '../../data/db'

const BlogsCards = () => {
  return (
    
    <>
    
    {data && data.BlogsCards.map(card =>{

        return(
            <div className="BlogsCards">
                <div className="img">
                    <img src= {card.Image} alt="" />
                    <div className="textBox">
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                </div>
                </div>
            </div>
        )
    })}
    </>

  )
}

export default BlogsCards