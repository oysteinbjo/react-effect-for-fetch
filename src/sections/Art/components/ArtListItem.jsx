import React from 'react';

const ArtListItem = ({ artItem, baseURL }) => {

    return (
        <li>
            <div className='frame'>
                <img src={`${baseURL}${artItem.imageURL}`} />
                <h3>{artItem.title}</h3>
                <p>Artist: {artItem.artist}</p>
                <h4>Artistic Subjects:</h4>
                <ul>
                    {artItem.publicationHistory.map((pub, index) => {
                        return <li key={index}>{pub}</li>
                    })}
                </ul>
            </div>
        </li>

    );
}

export default ArtListItem;
