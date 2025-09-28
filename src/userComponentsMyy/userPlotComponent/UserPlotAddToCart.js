import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

export default function UserPlotAddToCart() {
    const userId = localStorage.getItem("userId");
    let params = useParams();
    const id = Number(params.id);  // Flat ID
    let { register, handleSubmit, setValue, formState } = useForm();
    let [plot, setPlot] = useState({});

    let navigate = useNavigate();
    console.log("add to cart");

    // Fetch Flat Details by ID
    const fetchAllPlotsById = async () => {
        let response = await fetch(`http://localhost:8080/99acres/plots/${id}`);
        let plotObject = await response.json();
        setPlot(plotObject.data);

        // Set the form values using setValue
        setValue('size', plotObject.data.size);
        setValue('price', plotObject.data.price);
        setValue('location', plotObject.data.location);
        setValue('description', plotObject.data.description);
        setValue('imageUrl', plotObject.data.imageUrl);
        setValue('mnumber', plotObject.data.mnumber);
    };

    useEffect(() => {
        fetchAllPlotsById();
    }, [id]); // Ensure the effect runs on mount

    // Handle Form Submission to add to cart
    const submitForm = async (formData) => {
        console.log("Form data submitted: ", formData);

        // Sending data to API (POST request)
        let response = await fetch(`http://localhost:8080/99acers/cart`, {
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
            navigate('/user/plot/');
            localStorage.setItem("cartpopup", true);
        }
    };

    useEffect(() => {
        if (plot.size) {
            handleSubmit(submitForm)();
        }
    }, [plot, handleSubmit, submitForm]);
    return (
        <div>

        </div>
    )
}
