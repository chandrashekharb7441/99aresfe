import React from 'react'
import { useEffect, useState } from 'react'
import FlatLogo from "./flat.avif";
import UserFlatSort from './UserFlatSort';
import UserFlatFilter from './UserFlatFilter';
import UserFlatSearch from './UserFlatSearch';
import UserFlats from './UserFlats';


export default function UserFlatHome() {
  let[flats,setflat]=useState(null)
  let [searchLocation, setSearchLocation]=useState(null)

  const fetchAllFlats= async()=>
    {
        let response = await fetch("https://realestate-vfkm.onrender.com/99acres/flats")
        let flatObject=await response.json()
        setflat(flatObject.data)
        setSearchLocation(flatObject.data)
        console.log(flatObject.data); 
    }

  const SortBySize = async(size)=>
    {
      let url =  size=="all"?
      `http://localhost:8080/99acres/flats`:
      `http://localhost:8080/99acres/flats/sort/${size}`
  
      let response = await fetch(url)
      let flatObject= await response.json()
      setflat(flatObject.data)
      console.log(flatObject.data);
      
    }
    
    const FilterByPrice=async(filteringOrder)=>
      {
        let url = filteringOrder==='asc'? 
        `http://localhost:8080/99acres/flats/filter/asc` : 
        `http://localhost:8080/99acres/flats/filter/desc`
      
        let response =await fetch(url)
        let flatObject=await response.json()
        setflat(flatObject.data) 
        console.log(flatObject.data);
      }

      const searchByLocation = (location)=>{
        if(location==='')
        {
          setflat(location)
        }
        console.log(searchLocation);
          let searchedflats=searchLocation.filter(flat => flat.location.includes(location))
          setflat(searchedflats)
      }

    useEffect(()=>{ fetchAllFlats()},[])
  return (
    <div style={{marginTop: '4rem'}}>
      <div className="d-flex justify-content-between align-items-center p-3">
        <img src={FlatLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }} />
        <h3 className="m-2 flex-grow-1">Flat List</h3>
        <div className="d-flex gap-3">
          <UserFlatSort onSortBySize={SortBySize}/>
          <UserFlatFilter onFilterByPrice={FilterByPrice}/>
          <UserFlatSearch onSearchByLocation={searchByLocation}/>
        </div>
      </div>

      <div className='container mt-3 '>
        <UserFlats flatData={flats}/>
      </div>
    </div>
  )
}
