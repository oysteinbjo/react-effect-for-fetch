import React from 'react';

const UsersListItem = ({ user }) => {
    const colorStyle = {
        background: user.favouriteColour
    }

    return (
        <li style={colorStyle}>
            <img src={user.profileImage} />
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
        </li>
    );
}

export default UsersListItem;
