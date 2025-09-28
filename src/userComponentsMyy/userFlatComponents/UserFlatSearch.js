import React from 'react'
import { useForm } from 'react-hook-form'

export default function UserFlatSearch(props) {
  let {register,handleSubmit,formState}=useForm()
  const submitForm= async(formData)=>
    {
      const lowerCaseLocation = formData.location.toLowerCase();
      console.log(lowerCaseLocation)
      props.onSearchByLocation(lowerCaseLocation)
    }
  return (
    <div>
      <form onSubmit={handleSubmit(submitForm)}>
            <div className="mb-3 d-flex">
            <input type="text" className="form-control me-3" aria-describedby="errorMessage" placeholder='Flat Location' {...register('location')}/>
              {/* <input type="text" className="form-control me-3" aria-describedby="errorMessage" placeholder='Product Name' {...register('name',{required:true,minLength:4,maxLength:15})}/> */}
              {/* <div id="errorMessage" className="form-text text-danger">
                {formState.errors && formState.errors.name && formState.errors.name.type==="required" && "Name is required"}
                {formState.errors && formState.errors.name && formState.errors.name.type==="minLength" && "Name must have at least 4 characters"}
                {formState.errors && formState.errors.name && formState.errors.name.type==="maxLength" && "Name must have at most 15 characters"}
              </div> */}
              <button type="submit" className="btn btn-primary w-25">Search</button>
            </div>
            
        </form>
    </div>
  )
}
