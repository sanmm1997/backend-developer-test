import React, { useState, useEffect } from "react";
import List from "../components/layout/List";

import {getUsers} from "../api/usersApi";
import UserItem from "../components/users/UserItem";
import SearchBar from "../components/SearchBar";

const Users = (props) => {
    const [users, setUsers] = useState([]);
    const [searchParam, setSearchParam] = useState('');


    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [searchParam]);

    const fetchUsers = async () => {
        const response = await getUsers(searchParam);
        setUsers([...response.data]);
    };

    const handleChange = (e) => {
        setSearchParam(e.target.value)
    };

    const handleClick = () => {
        setSearchParam('');
    };


    return (
        <>
            <div className="row pb-3">
                <div className="col-12 text-center">
                    <h1>Listado de usuarios</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <SearchBar
                        param={searchParam}
                        handleChange={handleChange}
                        handleClick={handleClick}
                    />
                </div>
            </div>
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
        </>
    )
};

export default Users;
