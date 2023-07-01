import React from 'react'

const ListBox = ({items}) => {
  return (
    <ul>
        {
            items.map((item,index)=>{
                return (
                  <li key={index}>
                     {item.name}
                  </li>
                )
            })
    }
        </ul>
  )
}

export default ListBox