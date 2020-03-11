import React, { useState } from "react";
import UsersForm from "../components/users/UsersForm";
import {validateNewUser} from "../utils/userUtils";
import {createUser} from "../api/usersApi";
import {NavLink} from "react-router-dom";

const initialUser = {
    name: '',
    email: '',
    password: '',
};

const Register = (props) => {
    const [user, setUser] = useState(initialUser);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       validateNewUser(user)
           .then((result) => (result) ? createUser(user) : alert('Uppsss!! Toda la información es requerida'))
           .then((response) => {
               alert(response.message);
               (response.hasOwnProperty('status') && response.status === 200) && props.history.push('/login')
           });
    };

    return (
        <div className="row">
            <UsersForm
                user={user}
                title="Registro"
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                subTitle="Crear una cuenta nueva"
            >
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Registrarme</button>
                </div>
                <p className="text-center">Ya tengo una cuenta?
                    <NavLink to="/login">&nbsp;Iniciar Sesión</NavLink>
                </p>
            </UsersForm>
        </div>
    )
};

export default Register;
