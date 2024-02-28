import React from 'react';

const FavouriteSlipsList = ({favouriteSlips}) => {
    console.log(favouriteSlips)
    return (
        <section class="favourite-slips-list">
            <h3>Favourite Advice Slips</h3>
            <ul>
                {favouriteSlips && favouriteSlips.map((slip, index) => {
                    return <li key={index}>{slip.slip.advice}</li>
                })}
            </ul>
        </section>
    );
}

export default FavouriteSlipsList;
