import React, { useState, useEffect } from "react";
import List from "../components/layout/List";

import {getClients} from "../api/clientsApi";
import ClientItem from "../components/clients/ClientItem";
import ClientsCreateRedirect from "../components/clients/ClientsCreateRedirect";
import SearchBar from "../components/SearchBar";

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [searchParam, setSearchParam] = useState('');

    useEffect(() => {
        fetchClients();
    }, []);

    useEffect(() => {
        fetchClients();
    }, [searchParam]);

    const handleChange = (e) => {
        setSearchParam(e.target.value)
    };

    const handleClick = () => {
        setSearchParam('');
    };

    const fetchClients = async () => {
        const response = await getClients(searchParam);
        setClients([...response.data]);
    };

    return (
        <>
            <div className="row pb-3">
                <div className="col-12 text-center">
                    <h1>Listado de clientes</h1>
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
                        <th>Edad</th>
                        <th>Teléfono</th>
                        <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    <List
                        colMd={4}
                        items={clients}
                        render={(client) => <ClientItem client={client}/> }
                    />
                    </tbody>
                </table>
                <ClientsCreateRedirect />
            </div>
        </>
    )
};

export default Clients;
