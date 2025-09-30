import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState(""); // Notification state

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://realestate-vfkm.onrender.com/99acers/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // console.log(data);

        setError(""); // Clear error
        localStorage.setItem("adminId", data.id);
        localStorage.setItem("adminName", data.username);

        // ✅ Show custom notification
        setNotification("Login successful!");

        // Hide notification after 3 seconds
        setTimeout(() => {
          setNotification("");
          navigate("/admin"); // Redirect to dashboard
        }, 2000);
      } else {
        setError("Invalid credentials!");
      }
    } catch (error) {
      setError("An error occurred, please try again later.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}
    >
      {/* ✅ Notification Box */}
      {notification && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#28a745",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {notification}
        </div>
      )}
      
      <div className="card p-5 shadow" style={{ maxWidth: "400px", marginTop: "50px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-danger text-center">{error}</p>}
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to={"/admin/register/"} className="text-primary fw-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
