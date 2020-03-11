import React, {
    useState
} from 'react';

const RequestManager = ({ data, render }) => {
    console.log(data)
    return (
        <div className="row justify-content-center">
            <h1>RequestManager</h1>
            { render() }
        </div>
    )
};

export  default RequestManager;