import React from 'react'

const Categories = ({categories, filterCourses}) => {
  return (
    <div className='btn-container'>
        {categories.map((category, index)=>{
            return(
                <button className='filter-btn' key={index} onClick={()=>filterCourses(category)}>{category}</button>
            )
        })}
    </div>
  )
}

export default Categories;