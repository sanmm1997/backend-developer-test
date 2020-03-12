import React, {useState} from "react";

const SearchBar = ({ handleChange, handleClick, param }) => {
    return (
        <form className="Search-bar mb-3" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
                <div className="col-sm-12 col-md-11">
                    <input
                        id="value"
                        name="value"
                        type="text"
                        value={param}
                        className="form-control"
                        onChange={handleChange}
                        placeholder="Ingrese el valor a buscar"
                    />
                </div>
                <div className="col-sm-12 col-md-1">
                    <button
                        type="buttton"
                        onClick={handleClick}
                        className="btn btn-secondary w-100"
                    >Limpiar</button>
                </div>
            </div>
        </form>
    )
};

export default SearchBar;
