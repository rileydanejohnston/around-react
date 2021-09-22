import React from 'react'
import api from '../utils/api';

export default function Main(props) {

  const [userName, setUserName] = React.useState('Jacques Cousteau');
  const [userDescription, setUserDescription] = React.useState('Explorer');
  const [userAvatar, setUserAvatar] = React.useState('../images/jacques.png');

  React.useEffect(() => {
    api.getUserInfo()
    .then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })
    .catch((err) => console.log(err));
    
    return () => {
      console.log('User name, about and avatar finished mounting.');
    }
  }, [])

  return (
    <main className='main'>
      <section className='profile'>
        <div className='profile__avatar' onClick={props.onEditAvatarClick} style={{ backgroundImage: `url(${userAvatar})` }}>
          <button className='profile__avatar-btn' type='button'></button>
        </div>
        <div className='profile__info-container'>
          <div className='profile__info'>
            <div className='profile__name-button'>
              <h1 className='profile__name'>{userName}</h1>
              <button className='profile__edit-button' type='button' onClick={props.onEditProfileClick}></button>
            </div>
            <p className='profile__about'>{userDescription}</p>
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
