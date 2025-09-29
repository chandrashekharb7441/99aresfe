import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminProfileUpdate() {
    const { register, handleSubmit, setValue,formState: { errors }, setError } = useForm();
    const [profile, setProfile] = useState(null);
    const adminId = localStorage.getItem("adminId");
    const navigate=useNavigate();

    const fetchAdminById = async () => {
            let response = await fetch(`http://realestate-vfkm.onrender.com/99acers/admin/profile/${adminId}`);
            let profileObject = await response.json();
            setProfile(profileObject);
            console.log(profileObject);

            setValue("username", profileObject.username || "");
            setValue("password", profileObject.password || ""); // ✅ Added
            setValue("confirmPassword", profileObject.password || ""); // ✅ Added
            setValue("fname", profileObject.fname || "");
            setValue("lname", profileObject.lname || "");
            setValue("mnumber", profileObject.mnumber || "");
    };
    
    useEffect(() => {
        fetchAdminById();
    }, []);

    const submitForm = async (formData) => {
        if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match!",
      });
      return;
    }
        console.log(formData); 
        let response = await fetch(`http://realestate-vfkm.onrender.com/99acers/admin/profile-update/${adminId}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

        let responseData = await response.json();
        console.log(responseData);
        localStorage.removeItem("adminId");
        localStorage.removeItem("adminName");
        navigate('/admin/login/');
    };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100" style={{ background: "linear-gradient(to right, #667eea, #764ba2)" }}>
      <div className="card p-5 shadow-lg" style={{ maxWidth: "450px", width: "100%", borderRadius: "15px", backgroundColor: "white" }}>
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Admin Profile Update</h2>
          <form onSubmit={handleSubmit(submitForm)}>
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
              style={{ borderRadius: "8px", transition: "0.3s", fontWeight: "bold" }}
            >
              Update
            </button>
            <div className="d-flex justify-content-center pt-2">
                <Link className="btn btn-secondary" to={"/admin/profile"}>Back</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
