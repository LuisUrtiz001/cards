import React from 'react'

export default function Card({title,image,instructor}) {
  return (
    <div className='card'>
        <div className='card-body text-center'>
        <img src={image} alt=""></img>
        <h4 className='card-title'>{title}</h4>
        <p className= 'card-text text-secondary'>
            Instructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-0' >
            Ir al sitio web
        </a>
        </div>
      </div>
  )
}
