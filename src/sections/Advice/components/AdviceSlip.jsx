import React from 'react';

const AdviceSlip = ({advice, refetch, saveToFavourites}) => {
    return (
        <section class="advice-slip">
            <h3>Some Advice</h3>
            <p>{advice.slip.advice}</p>
            <button onClick={refetch}>Get More Advice</button>
            <button onClick={() => saveToFavourites(advice)}>Save to Favourites</button>
        </section>
    );
}

export default AdviceSlip;
