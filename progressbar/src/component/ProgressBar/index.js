import React from 'react'
import './styles.css'
const ProgressBar = ({progress=0}) => {
  return (
    <div className='progress-bar'>
       <div className='progress-bar-fill' style={{transform:`translateX(calc(${progress-100}%)`}}></div>
        </div>
  )
}

export default ProgressBar