import React from 'react'

export default function Main(props) {

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar' onClick={props.onEditAvatarClick}>
          <button className='profile__avatar-btn' type='button'></button>
        </div>
        <div className='profile__info-container'>
          <div className='profile__info'>
            <div className='profile__name-button'>
              <h1 className='profile__name'>Jacques Cousteau</h1>
              <button className='profile__edit-button' type='button' onClick={props.onEditProfileClick}></button>
            </div>
            <p className='profile__about'></p>
          </div>
          <button className='profile__add-button' type='button' onClick={props.onAddPlaceClick}></button>
        </div>
      </section>
      <section className='locations'>
        <ul className='cards'>
        </ul>
      </section>
    </main>
  )
}
