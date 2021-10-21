import React from 'react';
import { Link } from 'react-router-dom';

// Functional Component
const Registrarse = () => {
    return (
        <div className="mt-5 container-fluid">
            <h3 className="row justify-content-center">Regístrate</h3>
            <div className="mt-5 container-fluid col col-md-4">
                <div className="m-auto row justify-content-center align-items-center">
                    <div className="mb-3 row">
                        <label className="form-label">Documento</label>
                        <select
                            className="w-50 form-select form-select-md"
                            id="validationDefault01"
                            required
                        >
                            <option selected>Cédula de Ciudadanía</option>
                            <option value="1">Cédula de Extrangería</option>
                            <option value="2">Nit</option>
                        </select>
                        <input
                            type="number"
                            className="w-50 form-control invalid"
                            id="validationDefault01"
                            placeholder="Número de documento"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2 " className="form-label">Correo electronico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder="correo@ejemplo.com"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput3" className="form-label">Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput3"
                            placeholder="contraseña"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput4" className="form-label">Confirmar Contraseña</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleFormControlInput4"
                            placeholder="confirmar contraseña"
                            required
                        />
                    </div>
                    <Link
                        to={"/auth/ingresar"}
                        className="btn btn-outline-secondary"
                        role="button"
                    >Registrarse</Link>
                    <Link to={"/auth/contraseña"}>
                        <p className="mt-3 row justify-content-center">¿Olvidaste tu contraseña?</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Registrarse;
