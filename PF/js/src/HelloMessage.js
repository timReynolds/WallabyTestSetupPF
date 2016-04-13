import React, { PropTypes } from 'react';

export default function HelloMessage({ message }) {
    return (
        <h1>Hello {message}!</h1>
    );
};

HelloMessage.propTypes = {
    message: PropTypes.string.isRequired
};