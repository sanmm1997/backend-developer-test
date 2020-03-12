import React from "react";
import { NavLink } from "react-router-dom";

const ClientsForm = ({ client, handleSubmit, handleChange, children, title, subTitle }) => {
    return (
        <div className="col-12 text-center">
            <div className="card bg-light">
                <article className="card-body mx-auto" >
                    <h4 className="card-title mt-3 text-center">{title || ''}</h4>
                    <p className="text-center">{subTitle || ''}</p>

                    <form onSubmit={handleSubmit} autoComplete="nope">

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={client.name}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Nombre completo"
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-envelope"/>
                                </span>
                            </div>
                            <input
                                name="email"
                                type="email"
                                value={client.email}
                                placeholder="Email"
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-lock"/>
                                </span>
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={client.password}
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-birthday-cake"/>
                                </span>
                            </div>
                            <input
                                type="number"
                                name="age"
                                value={client.age}
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Edad"
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-address-card"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="address"
                                value={client.address}
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Dirección"
                            />
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fas fa-phone"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="telephone"
                                value={client.telephone}
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Teléfono"
                            />
                        </div>
                        {children}
                    </form>
                </article>
            </div>
        </div>
    )
};

export default ClientsForm;
