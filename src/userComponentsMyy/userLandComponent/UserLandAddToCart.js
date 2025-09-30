import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function UserLandAddToCart() {
    const userId = localStorage.getItem("userId");
    let params = useParams();
    const id = Number(params.id);  // Flat ID
    let { register, handleSubmit, setValue, formState } = useForm();
    let [Land, setLand] = useState({});

    let navigate = useNavigate();
    console.log("add to cart");

    // Fetch Flat Details by ID
    const fetchAllLandsById = async () => {
        let response = await fetch(`https://realestate-vfkm.onrender.com/99acres/lands/${id}`);
        let landObject = await response.json();
        setLand(landObject.data);

        // Set the form values using setValue
        setValue('size', landObject.data.size);
        setValue('price', landObject.data.price);
        setValue('location', landObject.data.location);
        setValue('description', landObject.data.description);
        setValue('imageUrl', landObject.data.imageUrl);
        setValue('mnumber', landObject.data.mnumber);
    };

    useEffect(() => {
        fetchAllLandsById();
    }, [id]); // Ensure the effect runs on mount

    // Handle Form Submission to add to cart
    const submitForm = async (formData) => {
        console.log("Form data submitted: ", formData);

        // Sending data to API (POST request)
        let response = await fetch(`https://realestate-vfkm.onrender.com/99acers/cart`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                userId: formData.userId,
                flatId: id,
                size: formData.size,
                price: formData.price,
                location: formData.location,
                description: formData.description,
                imageUrl: formData.imageUrl,
                mnumber: formData.mnumber,
                userId: userId,
            })
        });

        let responseData = await response.json();
        console.log("Added to Cart Response: ", responseData);

        // Navigate after successful submission
        if (response.ok) {
            navigate('/user/land/');
            localStorage.setItem("cartpopup", true);
        }
    };

    useEffect(() => {
        if (Land.size) {
            handleSubmit(submitForm)();
        }
    }, [Land, handleSubmit, submitForm]);
  return (
    <div>
      
    </div>
  )
}
