import React from 'react'

export default function Protection(props) {
  return (
    <div className='protection'>
        <img src={props.img} alt="" srcset="" />
        <h2>Protection</h2>
        <h3>{props.text}</h3>
        <p>{props.para}</p>
    </div>
  )
}
