import React from  'react';
import './overview.css';

import CardSmall from './cardsmall';

const cardSmallData = [
    {
        id: 1,
        title: 'Pages Views',
        icon: './images/facebook.svg',
        alText: 'facebook',
        number: 87,
        porcentage: 3,
    },
    {
        id: 2,
        title: 'Likes',
        icon: './images/facebook.svg',
        alText: 'facebook',
        number: 52,
        porcentage: 2,
    },
    {
        id: 3,
        title: 'Likes',
        icon: './images/instagram.svg',
        alText: 'instagram',
        number: 5462,
        porcentage: 22.57,
    },
    {
        id: 4,
        title: 'Profile Views',
        icon: './images/instagram.svg',
        alText: 'instagram',
        number: '52k',
        porcentage: 13.75,
    },
    {
        id: 5,
        title: 'Retweets',
        icon: './images/twitter.svg',
        alText: 'twitter',
        number: 117,
        porcentage: 30.3,
    },
    {
        id: 6,
        title: 'Likes',
        icon: './images/twitter.svg',
        alText: 'twitter',
        number: 507,
        porcentage: 5.53,
    },
    {
        id: 7,
        title: 'Likes',
        icon: './images/youtube.svg',
        alText: 'youtube',
        number: 107,
        porcentage: 19,
    },
    {
        id: 8,
        title: 'Total Views',
        icon: './images/youtube.svg',
        alText: 'youtube',
        number: 1407,
        porcentage: 12,
    }
]
function Overview(){
    return (
        <section className="overview">
        <div className="wrapper">
            <h2>Overview - Today</h2>
            <div className="grid">

                {
                    cardSmallData.map(({id,title,icon,altText, number, porcentage}) => (
                        <CardSmall 
                        key={id}
                        title={title}
                        icon={icon}
                        altText={altText}
                        number={number}
                        porcentage={porcentage}
                        />
                    ))
                }

                {/* <article className="card-small">
                    <p className="card-small-views">Pages Views</p>
                    <p className="card-small-icon"><img src="./images/facebook.svg" alt="facebook"/></p>
                    <p className="card-small-number">87</p>
                    <p className="card-small-porcentage">
                        <span>
                            <img src="./images/up.svg" alt="up"/> 3%
                        </span>                    
                    </p>
                </article> */}
                
            </div>
        </div>

    </section>
    );
}

export default Overview;