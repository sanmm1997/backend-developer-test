import React from "react";
import { NavLink } from "react-router-dom";

const UsersForm = ({ user, handleSubmit, handleChange, children, title, subTitle }) => {
    return (
        <div className="col-12 text-center">
            <div className="card bg-light">
                <article className="card-body mx-auto" >
                    <h4 className="card-title mt-3 text-center">{title || ''}</h4>
                    <p className="text-center">{subTitle || ''}</p>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user"/>
                                </span>
                            </div>
                            <input
                                type="text"
                                name="name"
                                value={user.name}
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
                                value={user.email}
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
                                value={user.password}
                                className="form-control"
                                onChange={handleChange}
                                placeholder="Contraseña"
                            />
                        </div>
                        {children}
                    </form>
                </article>
            </div>
        </div>
    )
};

export default UsersForm;
