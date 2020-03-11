import React from 'react';
import md5 from 'md5';

const Gravatar = ({ email }) => {
    const hashEmail = md5(email);
    return (
        <img src={`https://www.gravatar.com/avatar/${hashEmail}?d=identicon`} className=""  alt=""/>
    )
};

export default Gravatar;
