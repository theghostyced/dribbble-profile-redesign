import React from 'react'

function Card(props) {
  return (
    <div className="w-full cursor-pointer hover:shadow-md shadow bg-white p-4">
      <img className="w-auto card-image object-contain" src={props.image} alt="Designs" />
    </div>
  )
}

export default Card
