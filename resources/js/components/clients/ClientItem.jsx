import React from 'react';
import { Link, Redirect } from "react-router-dom";

import Gravatar from "../Gravatar";
import {deleteClient} from "../../api/clientsApi";

const ClientItem = ({ client }) => {

    const handleClick = async () => {
        if (confirm(`Seguro que desea eliminar el cliente ${client.user.name}`)) {
            const response = await deleteClient(client.id);
            alert(response.message);
            window.location.reload();
        }
    };

    return (
        <>
            <td>{client.id}</td>
            <td className="text-center">
                <Gravatar email={client.user.email} />
            </td>
            <td>{client.user.name}</td>
            <td>{client.user.email}</td>
            <td>{client.age}</td>
            <td>{client.telephone}</td>
            <td className="text-center">
                <Link to={`/clients/${client.id}`} className="btn btn-sm btn-info">
                    Editar
                </Link>
                <a onClick={handleClick} className="btn btn-sm btn-danger text-white ml-2">
                    Eliminar
                </a>
            </td>
        </>
    )
};
export  default ClientItem;
