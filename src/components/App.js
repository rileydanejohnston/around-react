import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <div className='root'>
      <div className='page'>
        <Header />
        <Main />
        <Footer />
        <div className='popup' id='confirmPopup'>
          <div className='popup__container'>
            <button className='popup__close' type='button'></button>
            <form className='popup__form' id='confirm-form' method='POST' name='form'>
              <h3 className='popup__title popup__title_confirm'>Are you sure?</h3>
              <button className='popup__submit popup__submit_confirm' id='confirm-submit' type='submit' name='submit'>Yes</button>
            </form>
          </div>
        </div>
        <div className='popup' id='profilePicPopup'>
          <div className='popup__container'>
            <button className='popup__close' type='button'></button>
            <form className='popup__form' id='profile-pic' method='POST' name='form' novalidate>
              <h3 className='popup__title popup__title_confirm'>Change profile picture</h3>
              <input className='popup__about popup__about_profile-pic popup__input' id='profile-pic-url' type='url' placeholder='Image link' name='pic' required />
              <span className='popup__error' id='profile-pic-url-error'></span>
              <button className='popup__submit popup__submit_disabled popup__submit_profile-pic' id='profile-pic-submit' type='submit' name='submit' disabled>Save</button>
            </form>
          </div>
        </div>
        <div className='popup' id='editProfile'>
          <div className='popup__container'>
            <button className='popup__close' type='button'></button>
            <form className='popup__form' id='profile-popup' method='POST' name='form' novalidate>
              <h3 className='popup__title'>Edit profile</h3>
              <input className='popup__name popup__input' id='profile-name' type='text' placeholder='Name' name='name' minlength='2' maxlength='40' required />
              <span className='popup__error' id='profile-name-error'></span>
              <input className='popup__about popup__input' id='profile-about' type='text' placeholder='About' name='about' minlength='2' maxlength='200' required />
              <span className='popup__error' id='profile-about-error'></span>
              <button className='popup__submit popup__submit_disabled' id='profile-submit' type='submit' name='submit' disabled>Save</button>
            </form>
          </div>
        </div>
        <div className='popup' id='newPlace'>
          <div className='popup__container'>
            <button className='popup__close popup__close_type_place' type='button'></button>
            <form className='popup__form' id='place-popup' method='POST' name='form' novalidate>
              <h3 className='popup__title'>New place</h3>
              <input className='popup__name popup__input' id='newPlace-name' type='text' placeholder='Title' name='title' minlength='1' maxlength='30' required />
              <span className='popup__error' id='newPlace-name-error'></span>
              <input className='popup__about popup__input' id='newPlace-about' type='url' placeholder='Image link' name='link' required />
              <span className='popup__error' id='newPlace-about-error'></span>
              <button className='popup__submit popup__submit_disabled' type='submit' name='submit' disabled>Create</button>
            </form>
          </div>
        </div>
        <div className='popup' id='photo'>
          <div className='popup__image-wrap'>
            <button className='popup__close popup__close_type_image' type='button'></button>
            <img className='popup__image' src='City' alt='City' />
            <p className='popup__caption'></p>
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