import React from 'react';
import './topcards.css';

import Card from './card.js';

const cardListData = [
    {
        id: 1,
        username: "@GervySalinas" ,
        classCard: 'facebook',
        icon: "./images/facebook.svg" ,
        altText: "Facebook" ,
        followers: "1483",
        title: "Followers",
        today: "12 Today" 
    },
    {
        id: 2,
        username: "@GervySalinas" ,
        classCard: 'twitter',
        icon: "./images/twitter.svg" ,
        altText: "Twitter" ,
        followers: "28k",
        title: "Followers",
        today: "12 Today" 
    },
    {
        id: 3,
        username: "@GervySalinas" ,
        classCard: 'instagram',
        icon: "./images/instagram.svg" ,
        altText: "Instagram" ,
        followers: "6k",
        title: "Followers",
        today: "12 Today" 
    },
    {
        id: 4,
        username: "@GervySalinas" ,
        classCard: 'youtube',
        icon: "./images/youtube.svg" ,
        altText: "YouTube" ,
        followers: "12k",
        title: "Followers",
        today: "12 Today" 
    }
];

function TopCards(){
    return (
        <section className="top-cards desaparecer">
            <div className="wrapper">
                <div className="grid">

                    {
                        cardListData.map(({id,username,classCard,icon,altText,followers,title,today}) => (
                            <Card 
                            key={id} 
                            username={username}
                            classCard={classCard}
                            icon={icon}
                            altText={altText}
                            followers={followers}
                            title={title}
                            today={today}
                            />
                        ))
                    }

                    {/* <Card username="@GervySalinas" icon="./images/facebook.svg" altText="Facebook" 
                        followers="1483" title="Followers" today="12 Today" /> */}
                </div>
            </div>        
        </section>
    );
}

export default TopCards;
