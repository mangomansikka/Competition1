const idCard = [
    {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: '178',
    birth: '1992-07-14',
    picture: "https://randomuser.me/api/portraits/men/44.jpg"
    },
    {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    heigh: '172',
    birth: '1988-05-11',
    picture: "https://randomuser.me/api/portraits/women/44.jpg"
    },
];


const random = [
    {
    min: '1',
    max: '6',
    },
    {min: '1',
    max: '100'
    },
]


const greetings = [
    {
    lang: 'de',
    greeting: 'Hallo',
    children: 'Ludwig'
    },
    {
    lang: 'fr',
    greeting: 'Bonjour',
    children: 'François'
    },
    {
    lang: 'en',
    greeting: 'Hello',
    children: 'John'
    },
    {
    lang: 'es',
    greeting: 'Hola',
    children: 'Carlos'
    },
]

const boxColor = [
    {
    r: 255,
    g: 0,
    b: 0
    },
    {
    r: 128,
    g: 255,
    b: 0
    },
]

const creditCard = [
    {
    type: 'Visa',
    number: '0123456789018845',
    expirationMonth: '3',
    expirationYear: '2021',
    bank: 'BNP',
    owner: 'Maxence Bouret',
    bgColor: '#11aa99',
    color: 'white'
    },
    {
    type: 'Master Card',
    number: '0123456789010995',
    expirationMonth: '7',
    expirationYear: '2023',
    bank: 'N26',
    owner: 'Natalia May',
    bgColor: '#eeeeee',
    color: '222222' 
    },
    {
    type: 'Visa',
    number: '0123456789016984',
    expirationMonth: '12',
    expirationYear: '2019',
    bank: 'M57',
    owner: 'Victoria Brown',
    bgColor: '#ddbb55',
    color: 'white'
    },
]

module.exports = {
    idCard,
    random,
    greetings,
    boxColor,
    creditCard
};