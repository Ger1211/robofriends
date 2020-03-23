import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
            <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

export default Card;