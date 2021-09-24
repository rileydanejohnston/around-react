import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ isOpen: false, link: '', name: '' });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({ isOpen: true, link: card.link, name: card.name });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ isOpen: false, link: '', name: '' });
  }

  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main 
          onEditProfileClick={handleEditProfileClick} 
          onAddPlaceClick={handleAddPlaceClick} 
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        <PopupWithForm title='Are you sure?' name='confirm' />
        <PopupWithForm title='Change profile picture' name='avatar' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <input className='popup__about popup__about_profile-pic popup__input' id='profile-pic-url' type='url' placeholder='Image link' name='pic' required />
          <span className='popup__error' id='profile-pic-url-error' />
        </PopupWithForm>
        <PopupWithForm title='Edit profile' name='profile' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
          <input className='popup__name popup__input' id='profile-name' type='text' placeholder='Name' name='name' minLength='2' maxLength='40' required />
          <span className='popup__error' id='profile-name-error' />
          <input className='popup__about popup__input' id='profile-about' type='text' placeholder='About' name='about' minLength='2' maxLength='200' required />
          <span className='popup__error' id='profile-about-error' />
        </PopupWithForm>
        <PopupWithForm title='New place' name='place' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <input className='popup__name popup__input' id='newPlace-name' type='text' placeholder='Title' name='title' minLength='1' maxLength='30' required />
          <span className='popup__error' id='newPlace-name-error' />
          <input className='popup__about popup__input' id='newPlace-about' type='url' placeholder='Image link' name='link' required />
          <span className='popup__error' id='newPlace-about-error' />
        </PopupWithForm>
        <div className='popup' id='confirmPopup'>
          <div className='popup__container'>
            <button className='popup__close' type='button' />
            <form className='popup__form' id='confirm-form' method='POST' name='form'>
              <h3 className='popup__title popup__title_confirm'>Are you sure?</h3>
              <button className='popup__submit popup__submit_confirm' id='confirm-submit' type='submit' name='submit'>Yes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;