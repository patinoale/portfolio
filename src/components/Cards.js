import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Take a look at my projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/whale-scope.png'
              text='Explore or share your whale sighting adventures!'
              path='/portfolio'
            />
            <CardItem
              src='images/lunch-bunch.png'
              text='Set up synchronized food orders for collegues!'
              path='/portfolio'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/vegviews.png'
              text='Find reviews to vegan meals!'
              path='/portfolio'
            />
            <CardItem
              src='images/ready-recipes.png'
              text='Search through over one million recipes!'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;