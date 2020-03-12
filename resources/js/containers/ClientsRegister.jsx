import React, { useState } from "react";
import ClientsForm from "../components/clients/ClientsForm";
import {validateNewClient} from "../utils/ClientsUtils";
import {createClient} from "../api/clientsApi";
import {Link} from "react-router-dom";

const initialClient = {
    name: '',
    email: '',
    password: '',
    address: '',
    age: '',
    telephone: ''
};

const ClientsRegister = (props) => {
    const [client, setClient] = useState(initialClient);

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
       validateNewClient(client)
           .then((result) => (result) ? createClient(client) : alert('Uppsss!! Toda la información es requerida'))
           .then((response) => {
               alert(response.message);
               (response.hasOwnProperty('status') && response.status === 200) && props.history.push('/clients')
           });
    };

    return (
        <div className="row">
            <ClientsForm
                client={client}
                title="Registrar nuevo cliente"
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                subTitle="complete los datos para crear un nuevo cliente"
            >
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Crear cliente</button>
                    <Link to="/clients" className="btn btn-info ml-3">Regresar</Link>
                </div>
            </ClientsForm>
        </div>
    )
};

export default ClientsRegister;
