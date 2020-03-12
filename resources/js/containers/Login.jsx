import React, {useState} from "react";
import UsersLogin from "../components/users/UsersLogin";
import {saveJwtLocalStorage, validateLoginUser} from "../utils/userUtils";
import {loginUser} from "../api/usersApi";

const initialUser = {
    role: '',
    email: '',
    password: '',
};

const Login = (props) => {
    const [user, setUser] = useState(initialUser);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateLoginUser(user)
            .then(result => result ? loginUser(user) : alert('Uppsss!! Toda la información es requerida'))
            .then(response => {
                if (response.status === 200) {
                    saveJwtLocalStorage(response.data);
                    props.history.push("/");
                } else {
                    alert('Los datos son incorrrectos');
                }
            })
    };

    return (
        <div className="row">
            <UsersLogin
                user={user}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
};

export default Login;
