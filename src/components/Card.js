import React from 'react'

export default function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }
  
  return (
    <li key={props.id} className='cards__item'>
        <button className='cards__close-button' type='button' />
        <img className='cards__photo' src={props.card.link} alt={props.card.name} onClick={handleClick} />
        <div className='cards__label'>
          <h2 className='cards__name'>{props.card.name}</h2>
          <div className='cards__like'>
            <button className='cards__like-button' type='button' />
            <p className='cards__like-count'>{props.card.likes.length}</p>
          </div>
        </div>
      </li>
  )
}
