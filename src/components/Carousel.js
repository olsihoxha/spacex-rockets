import React from 'react'

function Carousel({rocket}) {
    return (
            <div id={`carousel${rocket.id}Controls`} class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={rocket.flickr_images[0]} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={rocket.flickr_images[1]} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <a class="carousel-control-prev" href={`#carousel${rocket.id}Controls`} role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href={`#carousel${rocket.id}Controls`} role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

    )
}

export default Carousel;
