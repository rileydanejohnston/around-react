import React from 'react'

export default function ImagePopup(props) {
  return (
    <div className={props.card.isOpen ? 'popup popup_active' : 'popup'} onClick={props.onClose}>
      <div className='popup__image-wrap'>
        <button className='popup__close popup__close_type_image' type='button' onClick={props.onClose}></button>
        <img className='popup__image' src={props.card.link} alt={props.card.name} />
        <p className='popup__caption'>{props.card.name}</p>
      </div>
    </div>
  )
}
