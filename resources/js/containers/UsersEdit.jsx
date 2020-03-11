import React, { useState, useEffect } from "react";
import {createUser, getUser, updateUser} from "../api/usersApi";
import UsersForm from "../components/users/UsersForm";
import {Link} from "react-router-dom";
import {validateNewUser} from "../utils/userUtils";

const initialUser = {
    name: '',
    email: '',
    password: '',
};

const UsersEdit = (props) => {
    const [user, setUser] = useState(initialUser);
    const hasUser = Object.keys(user).length;

    useEffect(() => {
        fetchUser();
    }, []);

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateNewUser(user)
            .then((result) => (result) ? updateUser(user) : alert('Uppsss!! Toda la información es requerida'))
            .then((response) => {
                alert(response.message);
                (response.hasOwnProperty('status') && response.status === 200) && props.history.push('/users')
            });
    };

    const fetchUser = async () => {
        const response = await getUser(props.match.params.id);
        setUser({ ...user, ...response.data});
    };

    return (
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10">
                { hasUser && (
                    <UsersForm
                        user={user}
                        title="Editar usuario"
                        subTitle="Toda la información es requerida"
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Actualizar</button>
                            <Link
                                to="/users"
                                className="btn btn-info ml-3"
                            >Regresar</Link>
                        </div>
                    </UsersForm>
                )}
            </div>
        </div>
    )
};

export default UsersEdit;
