import React from 'react'
import { useEffect, useState } from 'react'
import PlotLogo from "./plot.png";
import UserPlots from './UserPlots'
import UserPlotSort from './UserPlotSort';
import UserPlotFilter from './UserPlotFilter';
import UserPlotSearch from './UserPlotSearch';

export default function UserPlotHome() {
  let[plots,setplot]=useState(null)
  let [searchLocation, setSearchLocation]=useState(null)

  const fetchAllPlots= async()=>
    {
        let response = await fetch("http://localhost:8080/99acres/plots")
        let plotObject=await response.json()
        setplot(plotObject.data)
        setSearchLocation(plotObject.data)
        console.log(plotObject.data); 
    }

  const SortBySize = async(size)=>
    {
      let url =  size=="all"?
      `http://localhost:8080/99acres/plots`:
      `http://localhost:8080/99acres/plots/sort/${size}`
  
      let response = await fetch(url)
      let plotObject= await response.json()
      setplot(plotObject.data)
      console.log(plotObject.data);
      
    }
    
    const FilterByPrice=async(filteringOrder)=>
      {
        let url = filteringOrder==='asc'? 
        `http://localhost:8080/99acres/plots/filter/asc` : 
        `http://localhost:8080/99acres/plots/filter/desc`
      
        let response =await fetch(url)
        let plotObject=await response.json()
        setplot(plotObject.data) 
        console.log(plotObject.data);
      }

      const searchByLocation = (location)=>{
        if(location==='')
        {
          setplot(location)
        }
        console.log(searchLocation);
          let searchedflats=searchLocation.filter(plot => plot.location.includes(location))
          setplot(searchedflats)
      }

    useEffect(()=>{ fetchAllPlots()},[])
  return (
    <div style={{marginTop: '4rem'}}>
      <div className="d-flex justify-content-between align-items-center p-3">
        <img src={PlotLogo} alt="Logo" className="img-fluid" style={{ height: '3rem' }} />
        <h3 className="m-2 flex-grow-1">Plot List</h3>
        <div className="d-flex gap-3">
          <UserPlotSort onSortBySize={SortBySize}/>
          <UserPlotFilter onFilterByPrice={FilterByPrice}/>
          <UserPlotSearch onSearchByLocation={searchByLocation}/>
        </div>
      </div>

      <div className='container mt-3 '>
        <UserPlots plotData={plots}/>
      </div>
    </div>
  )
}
