import React from 'react'
import Flat from './flat.avif';
import AgriLand from './Agri Land.png';
import Plot from './plot.jpg';
import { Link } from 'react-router-dom'

export default function UserOptions() {
  return (
    <div className="container-fluid mt-5" style={{paddingTop:"7rem"}}>
  <div className="row w-100">
    <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={Flat} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Flats</h5>
          <p className="card-text">"Explore a wide range of modern flats with premium amenities. Find your dream home in prime locations with flexible buying and renting options."</p>
          <Link className="d-flex justify-content-center" to={'/user/flat/'}><button type="button" className="btn btn-primary">View</button></Link>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: '18rem' }}>
        <img src={Plot} className="card-img-top" alt="Card Image" />
        <div className="card-body">
          <h5 className="card-title">Plots</h5>
          <p className="card-text">"Discover the best plots for residential and commercial purposes. Invest in strategically located land with great future value."</p>
          <Link className="d-flex justify-content-center" to={'/user/plot/'}><button type="button" className="btn btn-primary">View</button></Link>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-4 d-flex justify-content-center mb-4">
      <div className="card" style={{ width: '18rem' }}>
      <img src={AgriLand} className="card-img-top" alt="Card Image" style={{ height: '12rem' }} />
      <div className="card-body">
          <h5 className="card-title">Agri Lands</h5>
          <p className="card-text">"Explore verified agricultural land for farming and investment. Access fertile land with necessary resources and infrastructure for successful farming."</p>
          <Link className="d-flex justify-content-center" to={'/user/land/'}><button type="button" className="btn btn-primary">View</button></Link>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

