import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function AdminLandAdd() {
    let {register,handleSubmit,formState}=useForm()
    const [profile, setProfile] = useState(null);
    let navigate=useNavigate()
    const adminId = localStorage.getItem("adminId");

    useEffect(() => {
          const fetchAllData = async () => {
            let response = await fetch(`https://realestate-vfkm.onrender.com/99acers/admin/profile/${adminId}`);
            let profileObject = await response.json();
            setProfile(profileObject);  
          };
    
          fetchAllData();
        }, [adminId]);

    const submitForm= async(formData)=>{
        formData.location = formData.location.toLowerCase().trim();
        formData.description = formData.description.toLowerCase().trim();

        if (profile && profile.mnumber) {
            formData.mnumber = profile.mnumber;
        }

        let response = await fetch("https://realestate-vfkm.onrender.com/99acres/land",
                                {
                                    method:"POST",
                                    headers:{"Content-Type":"application/json"},
                                    body:JSON.stringify(formData)
                                })
        let responseData = await response.json()
        // console.log(responseData)
        navigate('/admin/land/')        
    }
  return (
    <div className='container mt-4 w-50'>
        <h3 className="d-flex justify-content-center mb-4 text-uppercase text-primary">Add New Land</h3>
        <form onSubmit={handleSubmit(submitForm)}>
        <div className="mb-3">
          <select className="form-control" aria-describedby="errorMessage" {...register('size', { required: true })}>
            <option value="">Select Size</option>
            <option value="1acer">1acer</option>
            <option value="2acer">2acer</option>
            <option value="3acer">3acer</option>
            <option value="4acer">4acer</option>
            <option value="5acer">5acer</option>
            <option value="more than 5acer">more than 5acer</option>
          </select>
        </div>
            <div className="mb-3">
                <input type="number" className="form-control" aria-describedby="errorMessage" placeholder='Land Price' {...register('price',{required:true,minLength:3,maxLength:15})}/>
                <div id="errorMessage" className="form-text text-danger">
                {formState.errors && formState.errors.price && formState.errors.price.type==="required" && "Price is required"}
                {formState.errors && formState.errors.price && formState.errors.price.type==="minLength" && "Price must have at least 4 characters"}
                {formState.errors && formState.errors.price && formState.errors.price.type==="maxLength" && "Price must have at most 15 characters"}
                </div>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" aria-describedby="errorMessage" placeholder='Land Location' {...register('location',{required:true,minLength:3,maxLength:15})}/>
                <div id="errorMessage" className="form-text text-danger">
                {formState.errors && formState.errors.location && formState.errors.location.type==="required" && "Location is required"}
                {formState.errors && formState.errors.location && formState.errors.location.type==="minLength" && "Location must have at least 4 characters"}
                {formState.errors && formState.errors.location && formState.errors.location.type==="maxLength" && "Location must have at most 15 characters"}
                </div>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" aria-describedby="errorMessage" placeholder='Land Description' {...register('description')}/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" aria-describedby="errorMessage" placeholder='Land imageUrlPath' {...register('imageUrl',{required:true})}/>
                <div id="errorMessage" className="form-text text-danger">
                {formState.errors && formState.errors.imageUrl && formState.errors.imageUrl.type==="required" && "Image is required"}
                </div>
            </div>
            <div className="mb-3">
                    <input type="hidden" value={adminId} {...register('adminId')} />
                </div>
            <button type="submit" className="btn btn-primary w-100">Add Land</button>
        </form>
    </div>
  )
}
