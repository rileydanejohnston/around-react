import React from 'react'

export default function Main() {

  function handleEditAvatarClick() {
    const avatarPopup = document.querySelector('#profilePicPopup');
    avatarPopup.classList.add('popup_active');
  }

  function handleEditProfileClick() {
    const profilePopup = document.querySelector('#editProfile');
    profilePopup.classList.add('popup_active');
  }

  function handleAddPlaceClick() {
    const placePopup = document.querySelector('#newPlace');
    placePopup.classList.add('popup_active');
  }

  return (
    
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar' onClick={handleEditAvatarClick}>
          <button className='profile__avatar-btn' type='button'></button>
        </div>
        <div className='profile__info-container'>
          <div className='profile__info'>
            <div className='profile__name-button'>
              <h1 className='profile__name'>Jacques Cousteau</h1>
              <button className='profile__edit-button' type='button' onClick={handleEditProfileClick}></button>
            </div>
            <p className='profile__about'></p>
          </div>
          <button className='profile__add-button' type='button' onClick={handleAddPlaceClick}></button>
        </div>
      </section>
      <section className='locations'>
        <ul className='cards'>
        </ul>
      </section>
    </main>
  )
}
