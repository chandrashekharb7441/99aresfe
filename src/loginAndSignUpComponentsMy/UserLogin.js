import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [notification, setNotification] = useState(""); 
  const [errorMessage, setErrorMessage] = useState(""); // For login errors
  const navigate = useNavigate(); 

  const onSubmit = async (formData) => {
    try {
      const response = await fetch("https://realestate-vfkm.onrender.com/99acers/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          username: formData.username,
          password: formData.password 
        }),
      });

      if (response.ok) {
        const data = await response.json();

        setNotification("Login successful!");
        setErrorMessage("");

        localStorage.setItem("userId", data.id);
        localStorage.setItem("userName", data.username);

        setTimeout(() => {
          setNotification(""); 
          navigate("/"); 
        }, 2000);
      } else {
        setErrorMessage("Invalid credentials!");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}>
      
      {/* ✅ Notification */}
      {notification && (
        <div style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "#28a745",
          color: "#fff",
          padding: "10px 20px",
          borderRadius: "5px",
          fontWeight: "bold",
        }}>
          {notification}
        </div>
      )}

      <div className="card p-5 shadow" style={{ maxWidth: "400px", marginTop: "50px" }}>
        <div className="card-body">
          <h2 className="text-center mb-4">User Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Username"  
                {...register("username", { required: "Username is required" })}              
              />
              {errors.username && <p className="text-danger">{errors.username.message}</p>}
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>
            {errorMessage && <p className="text-danger text-center">Invalid credentials!</p>}
            <button className="btn btn-primary w-100" type="submit">
              Login
            </button>
          </form>
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Link to={"/user/register/"} className="text-primary fw-bold">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
