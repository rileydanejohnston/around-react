import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
        <ImagePopup />
        <PopupWithForm title='Are you sure?' name='confirm'/>
        <PopupWithForm title='Change profile picture' name='avatar'>
          <input className='popup__about popup__about_profile-pic popup__input' id='profile-pic-url' type='url' placeholder='Image link' name='pic' required />
          <span className='popup__error' id='profile-pic-url-error'></span>
        </PopupWithForm>
        <PopupWithForm title='Edit profile' name='profile'>
          <input className='popup__name popup__input' id='profile-name' type='text' placeholder='Name' name='name' minlength='2' maxlength='40' required />
          <span className='popup__error' id='profile-name-error'></span>
          <input className='popup__about popup__input' id='profile-about' type='text' placeholder='About' name='about' minlength='2' maxlength='200' required />
          <span className='popup__error' id='profile-about-error'></span>
        </PopupWithForm>
        <PopupWithForm title='New place' name='place'>
          <input className='popup__name popup__input' id='newPlace-name' type='text' placeholder='Title' name='title' minlength='1' maxlength='30' required />
          <span className='popup__error' id='newPlace-name-error'></span>
          <input className='popup__about popup__input' id='newPlace-about' type='url' placeholder='Image link' name='link' required />
          <span className='popup__error' id='newPlace-about-error'></span>
        </PopupWithForm>
        <div className='popup' id='confirmPopup'>
          <div className='popup__container'>
            <button className='popup__close' type='button'></button>
            <form className='popup__form' id='confirm-form' method='POST' name='form'>
              <h3 className='popup__title popup__title_confirm'>Are you sure?</h3>
              <button className='popup__submit popup__submit_confirm' id='confirm-submit' type='submit' name='submit'>Yes</button>
            </form>
          </div>
        </div>
        
        
        <template id='cardTemplate'>
          <li className='cards__item'>
            <img className='cards__photo' src='City' alt='City' />
            <div className='cards__label'>
              <h2 className='cards__name'></h2>
              <div className='cards__like'>
                <button className='cards__like-button' type='button'></button>
                <p className='cards__like-count'></p>
              </div>
            </div>
          </li>
        </template>
        <template id='binTemplate'>
          <button className='cards__close-button' type='button'></button>
        </template>
      </div>
    </div>
  );
}

export default App;