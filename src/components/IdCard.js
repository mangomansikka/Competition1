import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  return (
    <div className='IdCard box'>
      <img className="img" src={picture} alt={`${firstName} ${lastName}`}/>
      <div className="right">
      <p><strong>First Name: </strong>{firstName}</p>
        <p><strong>Last Name: </strong>{lastName}</p>
        <p><strong>Gender: </strong>{gender}</p>
        <p><strong>Height: </strong>{height} cm</p>
        <p><strong>Birth: </strong>{birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;