import React from 'react';
const random = require("../data.js");


const Random = ({ min, max}) => {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return (
        <div className="random-box">
            <p>Random value between {min} and {max} : {randomNumber} </p>
        </div>
    );
};

export default Random;