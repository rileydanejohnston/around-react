import React from 'react'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ link: '', name: '' });
  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({ name: '', about: '', avatar: '', _id: ''});

  React.useEffect(() => {
    api.getUserInfo()
    .then(({ name, about, avatar, _id }) => {
      setCurrentUser({ name, about, avatar, _id });
    })
    .catch((err) => console.log(err));
    
    return () => {
    }
  }, []);
 
  React.useEffect(() => {
    api.getCards()
    .then((res) => {
      const cardData = res.map((item) => {
        return { likes: item.likes, name: item.name, link: item.link, cardId: item._id, ownerId: item.owner._id }
      });
      setCards(cardData);
    })
    .catch((err) => console.log(err));
    return () => {
    }
  }, []);

  {/* my previous reviewer instructed me to put the api calls/state variables be in the App.js file even though the instructions said Main.js. I'm continuing with that trend */} 
  function handleCardLike(card) {
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    api.changeLikeStatus(card.cardId, !isLiked)
    .then((res) => {
      const newCards = cards.map((prevCard) => {
        if (prevCard.cardId === res._id) {
          return { likes: res.likes, name: res.name, link: res.link, cardId: res._id, ownerId: res.owner._id };
        }
        return prevCard;
      });
      setCards(newCards);
    })  
    .catch((err) => console.log(err));
    return () => {
    }
  }

  function handleDeleteCard(card) {

    api.deleteCard(card.cardId)
    .then((res) => {
      console.log(cards);
      const newCards = cards.filter((prevCard) => { return prevCard.cardId !== card.cardId });
      setCards(newCards);
      console.log("-------------------");
      console.log(newCards);
    })  
    .catch((err) => console.log(err));
    return () => {
    }
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick({ link, name }) {
    setSelectedCard({ link, name });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ link: '', name: '' });
  }

  function handleUpdateUser(formInput) {
    api.updateProfile(formInput)
    .then((res) => {
      const updateUser = {...currentUser, name: res.name, about: res.about }
      setCurrentUser(updateUser);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(formInput) {
    api.updateProfilePic(formInput)
    .then((res) => {
      const updateUser = { ...currentUser, avatar: res.avatar };
      setCurrentUser(updateUser);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  return (
    <div className='root'>
      <div className='page'>
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main 
            onEditProfileClick={handleEditProfileClick} 
            onAddPlaceClick={handleAddPlaceClick} 
            onEditAvatarClick={handleEditAvatarClick}
            onCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike}
            onDeleteClick={handleDeleteCard}
          />
          <Footer />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
          <PopupWithForm title='Are you sure?' name='confirm' />
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
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
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;