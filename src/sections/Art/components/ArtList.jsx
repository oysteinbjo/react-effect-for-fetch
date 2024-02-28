import React from 'react';
import ArtListItem from './ArtListItem';

const ArtList = ({artListItems, baseURL}) => {
    return (
        <ul className='art-list'>
            {artListItems.map((item, index) => {
                return <ArtListItem artItem={item} baseURL={baseURL} index={index}/>
            })}
        </ul>
    );
}

export default ArtList;
