import React from 'react'
import { useEffect, useState } from 'react'
import LandLogo from "./Agri Land.png";
import UserLandNavbar from './UserLandNavbar'
import UserLands from './UserLands'
import UserLandSort from './UserLandSort';
import UserLandFilter from './UserLandFilter';
import UserLandSearch from './UserLandSearch';
import UserPlots from '../userPlotComponent/UserPlots';

export default function UserLandHome() {
  let[lands,setland]=useState(null)
  let [searchLocation, setSearchLocation]=useState(null)

  const fetchAllLands= async()=>
    {
        let response = await fetch("https://localhost:8080/99acres/lands")
        let landObject=await response.json()
        setland(landObject.data)
        setSearchLocation(landObject.data)
        console.log(landObject.data); 
    }

  const SortBySize = async(size)=>
    {
      let url =  size=="all"?
      `https://localhost:8080/99acres/lands`:
      `https://localhost:8080/99acres/lands/sort/${size}`
  
      let response = await fetch(url)
      let landObject= await response.json()
      setland(landObject.data)
      console.log(landObject.data);
      
    }
    
  const FilterByPrice=async(filteringOrder)=>
    {
      let url = filteringOrder==='asc'? 
      `https://localhost:8080/99acres/lands/filter/asc` : 
      `https://localhost:8080/99acres/lands/filter/desc`
    
      let response =await fetch(url)
      let landObject=await response.json()
      setland(landObject.data) 
      console.log(landObject.data);
    }

    const searchByLocation = (location)=>{
      if(location==='')
      {
        setland(location)
      }
      console.log(searchLocation);
        let searchedflats=searchLocation.filter(land => land.location.includes(location))
        setland(searchedflats)
    }

    useEffect(()=>{ fetchAllLands()},[])
  return (
    <div style={{marginTop: '4rem'}}>
      <div className="d-flex justify-content-between align-items-center p-3">
        <img src={LandLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }} />
        <h3 className="m-2 flex-grow-1">Land List</h3>
        <div className="d-flex gap-3">
          <UserLandSort onSortBySize={SortBySize}/>
          <UserLandFilter onFilterByPrice={FilterByPrice}/>
          <UserLandSearch onSearchByLocation={searchByLocation}/>
        </div>
      </div>

      <div className='container mt-3 '>
        <UserLands landData={lands}/>
      </div>
    </div>
  )
}
