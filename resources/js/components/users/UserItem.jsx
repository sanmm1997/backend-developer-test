import React from 'react';
import { Link, Redirect } from "react-router-dom";

import Gravatar from "../Gravatar";
import {deleteUser} from "../../api/usersApi";


const UserItem = ({ user }) => {
    const handleClick = async () => {
        if (confirm(`Seguro que desea eliminar el usuario ${user.name}`)) {
            const response = await deleteUser(user.id);
            alert(response.message);
            window.location.reload();
        }
    };

    return (
        <>
            <td>
                {user.id}
            </td>
            <td className="text-center">
                <Gravatar email={user.email} />
            </td>
            <td>
                {user.name}
            </td>
            <td>
                {user.email}
            </td>
            <td className="text-center">
                <Link to={`/users/${user.id}`} className="btn btn-sm btn-info">
                    Editar
                </Link>
                <a
                    onClick={handleClick}
                    className="btn btn-sm btn-danger text-white ml-2"
                >
                    Eliminar
                </a>
            </td>
        </>
    )
};
export  default UserItem;
