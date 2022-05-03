import React from 'react';

import './cardsmall.css';

function CardSmall({title,icon,altText, number, porcentage}){
    return (
        <article className="card-small">
            <p className="card-small-views">{title}</p>
            <p className="card-small-icon"><img src={icon} alt={altText}/></p>
            <p className="card-small-number">{number}</p>
            <p className="card-small-porcentage">
                <span>
                    <img src="./images/up.svg" alt="up"/> {porcentage}%
                </span>                    
            </p>
        </article>
    );
}

export default CardSmall;