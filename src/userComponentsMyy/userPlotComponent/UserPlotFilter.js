import React from 'react'

export default function UserPlotFilter(props) {
    const onChangePrice=(event)=>{
        console.log(event.target.value);
        props.onFilterByPrice(event.target.value);
      }
    return (
    <div> 
        <div className="mb-3">
            <select className="form-select" onChange={onChangePrice}>
                <option >Filter by Price</option>
                <option value={'asc'}>Low to High</option>
                <option value={'desc'}>High to Low</option>
            </select>
            </div>  
    </div>
    )
}
