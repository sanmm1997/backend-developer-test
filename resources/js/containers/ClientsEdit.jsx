import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {getClient, updateClient} from "../api/clientsApi";
import ClientsForm from "../components/clients/ClientsForm";
import {validateNewClient} from "../utils/ClientsUtils";

const initialClient = {
    name: '',
    email: '',
    password: '',
    address: '',
    age: '',
    telephone: ''
};

const ClientsEdit = (props) => {
    const [client, setClient] = useState(initialClient);
    const hasClient = Object.keys(client).length;

    useEffect(() => {
        fetchClient();
    }, []);

    const handleChange = (e) => {
        setClient({
            ...client,
            [e.target.name]: e.target.value,
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateNewClient(client)
            .then((result) => (result) ? updateClient(client) : alert('Uppsss!! Toda la información es requerida'))
            .then((response) => {
                alert(response.message);
                (response.hasOwnProperty('status') && response.status === 200) && props.history.push('/clients')
            });
    };

    const fetchClient = async () => {
        const response = await getClient(props.match.params.id);
        const { user, ...all } = response.data;
        setClient({ ...client, ...user, ...all});
        console.log('client', { ...client, ...user, ...all})
    };

    return (
        <div className="row justify-content-center">
            <div className="col-sm-12 col-md-10">
                { hasClient && (
                    <ClientsForm
                        client={client}
                        title="Editar cliente"
                        subTitle="Toda la información es requerida"
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Actualizar</button>
                            <Link
                                to="/clients"
                                className="btn btn-info ml-3"
                            >Regresar</Link>
                        </div>
                    </ClientsForm>
                )}
            </div>
        </div>
    )
};

export default ClientsEdit;
