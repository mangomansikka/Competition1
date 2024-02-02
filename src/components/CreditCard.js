// CreditCard
import React from 'react';
import visa from './visa.png';
import masterCard from './master-card.png';

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}) => {
  // Format the card number to display only the last 4 digits
  const formattedNumber = '•••• •••• •••• ' + number.slice(-4);

  // Format the expiration date
  const formattedExpiration = `${expirationMonth.toString().padStart(2, '0')}/${expirationYear.toString().slice(-2)}`;


  const logo = ()=>{
    if(type.toString() === "Visa"){
      return visa;
    }else {
      return masterCard;
    };
  };
  
  return (
    <div className='CreditCard' style={{color:color, backgroundColor:bgColor}}>
      <img className='Logo'  src={logo()} alt="Credit Card logo"/>
      <p className='CreditNumber'>{formattedNumber}</p>
      <p>Expires {formattedExpiration}  {bank}<br/>{owner}</p>
    </div>
  );
};
export default CreditCard;

/*
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: '24px', marginBottom: '15px' }}>{type}</div>
      <div style={{ fontSize: '30px', marginBottom: '20px' }}>{formattedNumber}</div>
      <div style={{ fontSize: '16px', marginBottom: '15px' }}>
        Expires {formattedExpiration}
      </div>
      <div style={{ fontSize: '16px', marginBottom: '15px' }}>{bank}</div>
      <div style={{ fontSize: '20px' }}>{owner}</div>
    </div>
  );
};*/


//export default CreditCard;

/*  const CreditCardContainer = () => {
    const cardsData = [
      {
        type: 'Visa',
        number: '1234567890123456',
        expirationMonth: 12,
        expirationYear: 2023,
        bank: 'Bank A',
        owner: 'John Doe',
        bgColor: '#11aa99',
        color: 'white',
      };
    ];
*/