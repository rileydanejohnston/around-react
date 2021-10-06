import React from 'react'
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props) {

  // I don't understand why we used refs instead of state.
  // is it just for practice?
  const avatarRef = React.useRef('');

  function handleAvatarChange(e) {
    avatarRef.current = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef);
  }

  return (
    <PopupWithForm title='Change profile picture' name='avatar' isOpen={props.isOpen} onSubmit={handleSubmit} onClose={props.onClose}>
      <input className='popup__about popup__about_profile-pic popup__input' ref={avatarRef} onChange={handleAvatarChange} id='profile-pic-url' type='url' placeholder='Image link' name='pic' required />
      <span className='popup__error' id='profile-pic-url-error' />
    </PopupWithForm>
  )
}

export default EditAvatarPopup
