import IdCard from './components/IdCard';
import Random from './components/Random';
import Greetings from './components/Greeting';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import './App.css';

// What is shown on the website
export default function html() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Document</title>
        <link rel="stylesheet" href="competition-1\src\App.css"/>
      </head>
    <body>
      <div id="root">
        <div>
          <h1 className="header">IdCard</h1>
          <div>
              <IdCard
              lastName='Doe'
              firstName='John'
              gender='male'
              height={178}
              birth={new Date("1992-07-14")}
              picture="https://randomuser.me/api/portraits/men/44.jpg"
              />
            <IdCard
              lastName='Delores'
              firstName='Obrien'
              gender='female'
              height={172}
              birth={new Date("1988-05-11")}
              picture="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </div>
        </div>

        <div>
          <h1 className="header">Greetings</h1>
          <div className='Greetings box'>
            <Greetings lang="de">Ludwig</Greetings></div>
          <div className='Greetings box'>
            <Greetings lang="fr">François</Greetings></div>
        </div>

        <div>
          <h1 className="header">Random</h1>
          <div className='Random box'>
            <Random min={1} max={6}/></div>
          <div className='Random box'>
            <Random min={1} max={100}/></div>
        </div>
      
        <div>
          <h1 className="header">BoxColor</h1>
          <div className='BoxColor box'>
            <BoxColor r={255} g={0} b={0} /></div>
          <div className='Random box BoxColor'>
            <BoxColor r={128} g={255} b={0} /></div>
        </div>

        <div className='creditCard'>   
          <h1 className="header">CreditCard</h1>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={7}
            expirationYear={2023}
            bank="N26"
            owner="Natalia May"
            bgColor="#eeeeee"
            color="#222222"
          />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="M57"
            owner="Victoria Brown"
            bgColor="#ddbb55"
            color="white"
          />
        </div>
      </div>
    </body>
  </html>
  );
};
