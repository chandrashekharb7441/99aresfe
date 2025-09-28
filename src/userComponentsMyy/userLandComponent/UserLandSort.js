import React from 'react'

export default function UserLandSort(props) {
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
          <option value={'1acer'}>1acer</option>
          <option value={'2acer'}>2acer</option>
          <option value={'3acer'}>3acer</option>
          <option value={'4acer'}>4acer</option>
          <option value={'5acer'}>5acer</option>
          <option value={'more than 5acer'}>more than 5acer</option>
        </select>
      </div>
    </div>
  )
}
