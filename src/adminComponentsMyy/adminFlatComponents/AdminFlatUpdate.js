import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function AdminFlatUpdate() {
    const adminId = localStorage.getItem("adminId");
    // console.log(adminId);
    let params = useParams();
    const id = Number(params.id);
    let { register, handleSubmit, formState, setValue } = useForm();
    let [flat, setFlat] = useState({});
    let navigate = useNavigate();

    const fetchAllFlatsById = async () => {
        let response = await fetch(`http://localhost:8080/99acres/flats/${id}`);
        let flatObject = await response.json();
        setFlat(flatObject.data);
        
        // Set the form values using setValue
        setValue('size', flatObject.data.size);
        setValue('price', flatObject.data.price);
        setValue('location', flatObject.data.location);
        setValue('description', flatObject.data.description);
        setValue('imageUrl', flatObject.data.imageUrl);
        setValue('mnumber', flatObject.data.mnumber);
        // setValue('adminId', flatObject.data.adminId);
    };

    useEffect(() => {
        fetchAllFlatsById();
    }, []);

    const submitForm = async (formData) => {
        formData.location = formData.location.toLowerCase().trim();
        formData.description = formData.description.toLowerCase().trim();
        // console.log(formData);
        let response = await fetch(`http://localhost:8080/99acres/flats/${id}`,
            {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

        let responseData = await response.json();
        // console.log(responseData);
        navigate("/admin/flat/");
    };

    return (
        <div className='container mt-4 w-50'>
            <h3 className="d-flex justify-content-center mb-4 text-uppercase text-primary">Update Flat</h3>
            <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-3">
                <select className="form-control" aria-describedby="errorMessage" {...register('size', { required: true })}>
                    <option value="">Select Size</option>
                    <option value="1RK">1RK</option>
                    <option value="1BHK">1BHK</option>
                    <option value="2BHK">2BHK</option>
                    <option value="3BHK">3BHK</option>
                </select>
            </div>
                <div className="mb-3">
                    <input type="number" className="form-control" aria-describedby="errorMessage" placeholder='Flat Price' {...register('price', { required: true, minLength: 3, maxLength: 15 })} />
                    <div id="errorMessage" className="form-text text-danger">
                        {formState.errors && formState.errors.price && formState.errors.price.type === "required" && "Price is required"}
                        {formState.errors && formState.errors.price && formState.errors.price.type === "minLength" && "Price must have at least 3 characters"}
                        {formState.errors && formState.errors.price && formState.errors.price.type === "maxLength" && "Price must have at most 15 characters"}
                    </div>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" aria-describedby="errorMessage" placeholder='Flat Location' {...register('location', { required: true, minLength: 3, maxLength: 15 })} />
                    <div id="errorMessage" className="form-text text-danger">
                        {formState.errors && formState.errors.location && formState.errors.location.type === "required" && "Location is required"}
                        {formState.errors && formState.errors.location && formState.errors.location.type === "minLength" && "Location must have at least 3 characters"}
                        {formState.errors && formState.errors.location && formState.errors.location.type === "maxLength" && "Location must have at most 15 characters"}
                    </div>
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" aria-describedby="errorMessage" placeholder='Flat Description' {...register('description')} />
                </div>
                <div className="mb-3">
            <input type="number" className="form-control" aria-describedby="errorMessage" placeholder='Mobile Number' {...register('mnumber',{required:true,minLength:10,maxLength:10})}/>
            <div id="errorMessage" className="form-text text-danger">
              {formState.errors && formState.errors.mnumber && formState.errors.mnumber.type==="required" && "Mobile Number is required"}
              {formState.errors && formState.errors.mnumber && formState.errors.mnumber.type==="minLength" && "Mobile Number must have at least 10 characters"}
              {formState.errors && formState.errors.mnumber && formState.errors.mnumber.type==="maxLength" && "Mobile Number must have at most q0 characters"}
            </div>
          </div>
                <div className="mb-3">
                    <input type="text" className="form-control" aria-describedby="errorMessage" placeholder='Flat imageUrlPath' {...register('imageUrl', { required: true })} />
                    <div id="errorMessage" className="form-text text-danger">
                        {formState.errors && formState.errors.imageUrl && formState.errors.imageUrl.type === "required" && "Image is required"}
                    </div>
                </div>
                <div className="mb-3">
                    <input type="hidden" value={adminId} {...register('adminId')} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Update Flat</button>
            </form>
        </div>
    );
}