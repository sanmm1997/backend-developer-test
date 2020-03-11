import React from 'react';
import { NavLink, useHistory } from "react-router-dom";
import {loadJwtLocalStorage} from "../../utils/userUtils";
import {logoutUser} from "../../api/usersApi";


const Header = () => {
    const authData = loadJwtLocalStorage();
    const history = useHistory();

    const handleClick = async () => {
        try {
            await logoutUser();
            history.push('/login');
        } catch (e) {
            alert(e);
        }
    };

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {authData && (
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <NavLink className="nav-link" to="/">Inicio</NavLink>
                            </li>
                            {authData.is_admin && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/users">Usuarios</NavLink>
                                </li>
                            )}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/clients">Clientes</NavLink>
                            </li>
                        </ul>
                    )}

                    <ul className="navbar-nav my-2 my-lg-0">
                        {!authData ? (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Iniciar Sesión</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Registrarse</NavLink>
                                </li>
                            </>
                        )
                        :
                            <li className="nav-item">
                                <a
                                    onClick={handleClick}
                                    className="nav-link"
                                >Cerrar sesión</a>
                            </li>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export  default Header;
