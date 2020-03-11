import React, { useState, useEffect } from "react";
import List from "../components/layout/List";

import {getUsers} from "../api/usersApi";
import UserItem from "../components/users/UserItem";

const Users = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        const response = await getUsers();
        setUsers(response.data);
    };

    return (
        <div className="row">
            <table className="table table-striped">
                <thead>
                <tr className="text-center">
                    <th>ID</th>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Opciones</th>
                </tr>
                </thead>
                <tbody>
                    <List
                        colMd={4}
                        items={users}
                        render={(user) => <UserItem user={user}/>
                    }/>
                </tbody>
            </table>
        </div>
    )
};

export default Users;
