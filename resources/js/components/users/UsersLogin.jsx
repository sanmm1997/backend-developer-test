import React from "react";
import { NavLink } from "react-router-dom";

const UsersLogin = ({ user, handleSubmit, handleChange }) => {
    return (
        <div className="col-12 text-center">
            <div className="card bg-light">
                <article className="card-body mx-auto" >
                    <h4 className="card-title mt-3 text-center">Inicio de sesión</h4>
                    <p>Ingrese los datos</p>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-user-tag"/>
                                </span>
                            </div>
                            <select
                                name="role"
                                className="form-control"
                                onChange={handleChange}
                            >
                                <option value="">Seleccione el Rol</option>
                                <option value="admin">Administrador</option>
                                <option value="seller">Vendedor</option>
                            </select>
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
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Contraseña"
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Iniciar sesión</button>
                        </div>
                    </form>
                </article>
            </div>
        </div>
    )
};

export default UsersLogin;
