import React from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext';

export default function Card({ card, onCardClick}) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwner = currentUser._id === card.ownerId;
  const deleteBtnClass = (`cards__close-button ${isOwner ? 'cards__close-button_visible' : 'cards__close-button_hidden'}`);

  
  card.likes.forEach((like) => {
    if (currentUser._id === like._id)
    {
      console.log(`Current user: ${currentUser._id}`);
      console.log(`Card likes: ${like._id}`);
    }
  });
  const isLiked = card.likes.some(like => like._id === currentUser._id);
  const likeBtnClass = isLiked ? 'cards__like-button cards__like-button_active' : 'cards__like-button';

  function handleClick() {
    onCardClick(card);
  }
  
  return (
    <li className='cards__item'>
        <button className={deleteBtnClass} type='button' />
        <img className='cards__photo' src={card.link} alt={card.name} onClick={handleClick} />
        <div className='cards__label'>
          <h2 className='cards__name'>{card.name}</h2>
          <div className='cards__like'>
            <button className={likeBtnClass} type='button' />
            <p className='cards__like-count'>{card.likes.length}</p>
          </div>
        </div>
      </li>
  )
}
