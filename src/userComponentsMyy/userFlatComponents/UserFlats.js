import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function UserFlats(props) {
  let navigate = useNavigate();
  let flats = props.flatData;
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
        flats && flats.map(flat => (
          <div key={flat.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3 d-flex justify-content-center">
            <div className="card shadow-sm" style={{ width: "18rem" }}>
              <img
                src={flat.imageUrl}
                className="card-img-top"
                alt="Flat"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title text-primary">₹ {flat.price}</h5>
                <p className="card-text"><strong>Size:</strong> {flat.size}</p>
                <p className="card-text"><strong>Location:</strong> {flat.location
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}</p>
                <p className="card-number"><strong><i class="bi bi-telephone-fill"></i></strong> {flat.mnumber}</p>
                <p className="card-text text-truncate">{flat.description
                  .split(" ")
                  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}</p>
                <div className="d-flex justify-content-center gap-2 mt-2">
                  {/* Add to Cart button */}
                  {localStorage.getItem("userName") && (
                    <Link to={`/user/flat/${flat.id}`} className="flex-fill">
                      <button className="btn btn-success w-100">
                        <i className="bi bi-cart-plus me-2"></i>
                      </button>
                    </Link>
                  )}

                  {/* WhatsApp button — Styled */}
                  <a
                    href={`https://wa.me/${flat.mnumber}?text=${encodeURIComponent(
                      `Hello, I am interested in your flat at ${flat.location} priced at ₹${flat.price}`
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
