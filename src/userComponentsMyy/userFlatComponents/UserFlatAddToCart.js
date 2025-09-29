import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function UserFlatAddToCart() {
    const userId = localStorage.getItem("userId");
    let params = useParams();
    const id = Number(params.id);  // Flat ID
    let { register, handleSubmit, setValue, formState } = useForm();
    let [flat, setFlat] = useState({});

    let navigate = useNavigate();
    console.log("add to cart");

    // Fetch Flat Details by ID
    const fetchAllFlatsById = async () => {
        let response = await fetch(`http://realestate-vfkm.onrender.com/99acres/flats/${id}`);
        let flatObject = await response.json();
        setFlat(flatObject.data);

        // Set the form values using setValue
        setValue('size', flatObject.data.size);
        setValue('price', flatObject.data.price);
        setValue('location', flatObject.data.location);
        setValue('description', flatObject.data.description);
        setValue('imageUrl', flatObject.data.imageUrl);
        setValue('mnumber', flatObject.data.mnumber);
    };

    useEffect(() => {
        fetchAllFlatsById();
    }, [id]); // Ensure the effect runs on mount

    // Handle Form Submission to add to cart
    const submitForm = async (formData) => {
        console.log("Form data submitted: ", formData);

        // Sending data to API (POST request)
        let response = await fetch(`http://realestate-vfkm.onrender.com/99acers/cart`, {
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
            navigate('/user/flat/');
            localStorage.setItem("cartpopup", true);
        }
    };

    useEffect(() => {
        if (flat.size) {
            handleSubmit(submitForm)();
        }
    }, [flat, handleSubmit, submitForm]);

    return (
        <div></div>
    );
}
