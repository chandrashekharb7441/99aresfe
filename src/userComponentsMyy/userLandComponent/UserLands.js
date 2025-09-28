import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserLands(props) {
  let lands = props.landData;

  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupStatus = localStorage.getItem("cartpopup");
    if (popupStatus === "true") {
      setShowPopup(true);

      // Auto-hide and reset after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
        localStorage.setItem("cartpopup", "false");
      }, 2000);
    }
  }, []);
  return (
    <div className="row">
      {showPopup && (
        <div
          style={{
            position: 'fixed',
            top: '650px',
            right: '20px',
            backgroundColor: '#28a745',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '8px',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            zIndex: 9999,
            width: '170px'
          }}
        >
          ✅ Added to cart!
        </div>
      )}
      {
        lands && lands.map(land => (
          <div key={land.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img
                src={land.imageUrl}
                className="card-img-top"
                alt="land"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">₹ {land.price}</h5>
                <p className="card-text"><strong>Size:</strong> {land.size}</p>
                <p className="card-text"><strong>Location:</strong> {land.location
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}</p>
                <p className="card-number"><strong><i class="bi bi-telephone-fill"></i></strong> {land.mnumber}</p>
                <p className="card-text text-truncate">{land.description
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}</p>
                <div className="d-flex justify-content-center gap-2 mt-2">
                  {/* Add to Cart button */}
                  {localStorage.getItem("userName") && (
                    <Link to={`/user/land/${land.id}`} className="flex-fill">
                      <button className="btn btn-success w-100">
                        <i className="bi bi-cart-plus me-2"></i>
                      </button>
                    </Link>
                  )}

                  {/* WhatsApp button — Styled */}
                  <a
                    href={`https://wa.me/${land.mnumber}?text=${encodeURIComponent(
                      `Hello, I am interested in your land at ${land.location} priced at ₹${land.price} id ${land.id}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success w-50"
                    style={{ backgroundColor: "#25D366", borderColor: "#25D366" }}
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
