import React from 'react';
import { createPortal } from 'react-dom';
import { Link } from "react-router-dom";

const ClientsCreateRedirect = () => {
    return (
        createPortal(
            <Link to="/register/client" className="ClientsCreateRedirect">
                <i className="fas fa-plus"/>
            </Link>,
            document.getElementById('portal')
        )
    );
};

export default ClientsCreateRedirect;
