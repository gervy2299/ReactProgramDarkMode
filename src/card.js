import React from 'react';

import './card.css';

function Card({username,classCard,icon,altText,followers,title,today}){

    const cardClass = `card ${classCard}`;
    return(
        <article className={cardClass}>
            <p className="card-title">
                <img src={icon} alt={altText}/>
                {username}
            </p>
            <p className="card-followers">
                <span className="card-followers-number">
                    {followers}
                </span>
                <span className="card-followers-title">
                    {title}
                </span>
            </p>
            <p className="card-today"><img src="./images/up.svg" alt="up"/>
                {today}
            </p>                        
        </article>
    );
}
export default Card;