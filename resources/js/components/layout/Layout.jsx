import React from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import Header from "./Header";
import {loadJwtLocalStorage} from "../../utils/userUtils";

const Layout = (props) => {
    const history = useHistory();
    const authData = loadJwtLocalStorage();

    return (
        (authData === undefined && (history.location.pathname !== "/login" && history.location.pathname !== "/register" ))
        ?
            <Redirect to="/login"/>
        :
            <>
                <Header/>
                <div className="container pt-5">
                    { props.children }
                </div>
            </>
    )
};

export  default Layout;
