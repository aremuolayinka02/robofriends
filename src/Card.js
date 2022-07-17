import React from 'react';

const Card = ({id, name, email} ) => {
   //Javascript Destructuring was used for the props
    return (
        <div className='tc bg-light-green grow dib br3 pa3 ma2 bw2 shadow-5'>
            <img src={`https://robohash.org/${id}`} alt='robots' width='200' height='200'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;