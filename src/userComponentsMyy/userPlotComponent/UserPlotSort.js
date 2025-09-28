import React from 'react'

export default function UserPlotSort(props) {
    const onChangeSize = (event)=>{
        console.log(event.target.value);
        props.onSortBySize(event.target.value);
      }
    return (
    <div>
        <div className="mb-3">
        <select className="form-select" onChange={onChangeSize}>
            <option value={'all'}>Filter by Size</option>
            <option >all</option>
            <option value={'1000SQFT'}>1000SQFT</option>
            <option value={'2000SQFT'}>2000SQFT</option>
            <option value={'3000SQFT'}>3000SQFT</option>
            <option value={'4000SQFT'}>4000SQFT</option>
            <option value={'5000SQFT'}>5000SQFT</option>
            <option value={'more than 5000SQFT'}>more than 5000SQFT</option>
        </select>
        </div>
    </div>
    )
}
