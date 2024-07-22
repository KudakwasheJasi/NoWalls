import React from 'react'
import image from '../assets/IMAGES/abt-img.png'
export const Services = () => {
  return (
    <>
    <section className='services'>
    <div className="services">
        <div className="services-container">
               <div className="services-items">
            <h2>Driven by the passion of building your brand!</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate nihil hic, facilis molestiae nostrum architecto eveniet qui facere, voluptatum voluptatibus blanditiis cumque laudantium adipisci est. Voluptatum dolorum accusamus voluptate minus maxime deserunt placeat? Molestias exercitationem dolor quasi laborum doloremque esse impedit rerum deserunt dolore. Eligendi praesentium voluptatem sapiente minima totam eaque sint, aut laboriosam hic, maxime unde? Explicabo blanditiis molestiae unde officia suscipit optio a eaque quas, minima illum voluptates.</p>
        </div>
        <div className="about-image">
             <img src= {image} alt="" />
        </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Services