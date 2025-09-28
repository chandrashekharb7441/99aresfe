import React from 'react'

export default function UserFlatSort(props) {
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
          <option value={'1RK'}>1RK</option>
          <option value={'1BHK'}>1BHK</option>
          <option value={'2BHK'}>2BHK</option>
          <option value={'3BHK'}>3BHK</option>
        </select>
      </div>
    </div>
  )
}
