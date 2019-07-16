import React from 'react'
import Card from './Card'
import design from '../static/invoice_maker_4x.jpg';
import basketball from '../static/pablo/pablo-basketball-game.png';
import rental from '../static/pablo/pablo-car-rental.png';
import cinema from '../static/pablo/pablo-cinema.png';
import workshop from '../static/pablo/pablo-workshop.png';
import unsubscribe from '../static/pablo/pablo-unsubscribed.png';
import healthy from '../static/pablo/pablo-healthy-life.png';
import family from '../static/pablo/pablo-family.png';

function Cards() {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="lg:w-4/12 md:w-full pr-4 pb-4">
        <Card image={design}/>
      </div>
      <div className="lg:w-4/12 md:w-full pr-4 pb-4">
        <Card image={basketball}/>
      </div>
      <div className="lg:w-4/12 md:w-full pb-4">
        <Card image={rental}/>
      </div>
      <div className="lg:w-4/12 md:w-full pr-4 pb-4">
        <Card image={cinema}/>
      </div>
      <div className="lg:w-4/12 md:w-full pr-4 pb-4">
        <Card image={workshop}/>
      </div>
      <div className="lg:w-4/12 md:w-full pb-4">
        <Card image={unsubscribe}/>
      </div>
      <div className="lg:w-4/12 md:w-full pb-4">
        <Card image={healthy}/>
      </div>
      <div className="lg:w-4/12 md:w-full pb-4">
        <Card image={unsubscribe}/>
      </div>
      <div className="lg:w-4/12 md:w-full pb-4">
        <Card image={family}/>
      </div>
      <div className="lg:w-4/12 md:w-full pr-4 pb-4">
        <Card image={design}/>
      </div>
      <div className="lg:w-4/12 md:w-full pr-4 pb-4">
        <Card image={basketball}/>
      </div>
      <div className="lg:w-4/12 md:w-full pb-4">
        <Card image={rental}/>
      </div>
    </div>
  )
}

export default Cards
