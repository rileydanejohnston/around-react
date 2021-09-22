import React from 'react'

export default function ImagePopup() {
  return (
    <div className='popup' id='photo'>
      <div className='popup__image-wrap'>
        <button className='popup__close popup__close_type_image' type='button'></button>
        <img className='popup__image' src='City' alt='City' />
        <p className='popup__caption'></p>
      </div>
    </div>
  )
}
