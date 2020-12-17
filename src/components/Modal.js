import React from 'react';
import Carousel from './Carousel';

export default function Modal({rocket}) {
    return (
        <div className="modal fade" id={`popup${rocket.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{rocket.name}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
       <Carousel rocket={rocket}/>
       <h3>{rocket.name}</h3>
       <div className="row rocket-info">
           <div className="col-sm-4">
            <h4>Height</h4>
            <p>{rocket.height.feet} Feet</p>
           </div>
           <div className="col-sm-4">
            <h4>Diameter</h4>
            <p>{rocket.diameter.feet} Feet</p>
           </div>
           <div className="col-sm-4">
            <h4>Mass</h4>
            <p>{rocket.mass.kg / 1000} Tonne</p>
           </div>
       </div>
       <p>{rocket.description}</p>
       <a href={rocket.wikipedia} className="btn btn-primary btn-block">Learn more at Wikipedia</a>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
    )
}
