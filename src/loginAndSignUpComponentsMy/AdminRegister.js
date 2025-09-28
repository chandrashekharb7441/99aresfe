import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AdminRegister = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match!",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/99acers/admin/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          fname: data.fname,
          lname: data.lname,
          mnumber: data.mnumber,
        }),
      });

      if (response.ok) {
        setError("");
        setNotification("Admin registered successfully!");

        setTimeout(() => {
          setNotification("");
          navigate('/admin/login/');
        }, 2000);
      } else {
        const errorData = await response.json();
        setError("server", {
          type: "manual",
          message: errorData.message || "Registration failed. Please try again!",
        });
      }
    } catch (err) {
      setError("server", {
        type: "manual",
        message: "An error occurred while connecting to the server.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}>
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

      <div className="card p-5 shadow-lg" style={{ maxWidth: "450px", width: "100%", borderRadius: "15px", backgroundColor: "white" }}>
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Admin Register</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
                style={{ borderRadius: "8px" }}
              />
              {errors.username && <p className="text-danger">{errors.username.message}</p>}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control shadow-sm"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                style={{ borderRadius: "8px" }}
              />
              {errors.password && <p className="text-danger">{errors.password.message}</p>}
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control shadow-sm"
                placeholder="Confirm Password"
                {...register("confirmPassword", { required: "Please confirm your password" })}
                style={{ borderRadius: "8px" }}
              />
              {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="First Name"
                {...register("fname", { required: "First Name is required" })}
                style={{ borderRadius: "8px" }}
              />
              {errors.fname && <p className="text-danger">{errors.fname.message}</p>}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Last Name"
                {...register("lname", { required: "Last Name is required" })}
                style={{ borderRadius: "8px" }}
              />
              {errors.lname && <p className="text-danger">{errors.lname.message}</p>}
            </div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control shadow-sm"
                placeholder="Mobile Number"
                {...register("mnumber", {
                  required: "Mobile number is required",
                  minLength: { value: 10, message: "Mobile number must be at least 10 characters" },
                  maxLength: { value: 10, message: "Mobile number must be at most 10 characters" },
                })}
                style={{ borderRadius: "8px" }}
              />
              {errors.mnumber && <p className="text-danger">{errors.mnumber.message}</p>}
            </div>

            {errors.server && <p className="text-danger text-center">{errors.server.message}</p>}

            <button
              className="btn btn-primary w-100"
              type="submit"
              disabled={loading}
              style={{ borderRadius: "8px", transition: "0.3s", fontWeight: "bold" }}
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <p className="text-center mt-3">
            Already have an account? <Link to={"/admin/login/"} className="text-primary fw-bold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
