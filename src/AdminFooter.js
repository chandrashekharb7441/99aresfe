import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function AdminFooter() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/"); 
  const userType = pathSegments[1];
  return (
    <div style={{paddingTop:"4rem"}}>
      <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row text-start">
          {/* Section 1 */}
          <div className="col-md-4 mb-4">
            <h5>99Acres Real Estate Portal</h5>
            <p>
              Thank you for exploring our real estate platform. <br/>
              Stay connected for the latest property listings and updates.
            </p>
          </div>

          {/* Section 2 */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link className="text-white text-decoration-none" to={`/${userType}/flat/`}>&gt; Flat</Link></li>
              <li><Link className="text-white text-decoration-none" to={`/${userType}/plot/`}>&gt; Plot</Link></li>
              <li><Link className="text-white text-decoration-none" to={`/${userType}/land/`}>&gt; AgriLand</Link></li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <p><i className="fa-solid fa-phone me-2"></i>74XXXXXX71</p>
            <p><i className="fa-regular fa-envelope me-2"></i>chandrashekharbamhanawat@gmail.com</p>
            <p><i className="fa-solid fa-location-dot me-2"></i>Navi Mumbai, India</p>
          </div>
        </div>

        <hr className="border-light" />
        <h6 className="text-center" id="designer">
          Designed with <span style={{ color: 'red' }}>❤</span> Chandrashekhar
        </h6>
      </div>
    </footer>




    </div>
  )
}
