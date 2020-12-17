import React from 'react'

function Card({rocket}) {
    return (
        <div className="card "key={rocket.id} >
        <img src={rocket.flickr_images[1]} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{rocket.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary" data-toggle="modal" data-target={`#popup${rocket.id}`}>View More</a>
        </div>
        </div>
    )
}

export default Card;
