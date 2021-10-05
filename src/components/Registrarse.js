import React from 'react';
import { Link } from 'react-router-dom';

// Functional Component
const Registrarse = () => {
    return (
        <div class="mt-5 container-fluid">
            <h3 class="row justify-content-center">Regístrate</h3>
            <div class="mt-5 container-fluid col col-md-4">
                <div class="m-auto row justify-content-center align-items-center">
                    <div class="mb-3 row">
                        <label class="form-label">Documento</label>
                        <select
                            class="w-50 form-select form-select-md"
                            id="validationDefault01"
                            required
                        >
                            <option selected>Cédula de Ciudadanía</option>
                            <option value="1">Cédula de Extrangería</option>
                            <option value="2">Nit</option>
                        </select>
                        <input
                            type="number"
                            class="w-50 form-control invalid"
                            id="validationDefault01"
                            placeholder="Número de documento"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput2 " class="form-label">Correo electronico</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput2"
                            placeholder="correo@ejemplo.com"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput3" class="form-label">Contraseña</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleFormControlInput3"
                            placeholder="contraseña"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput4" class="form-label">Confirmar Contraseña</label>
                        <input
                            type="password"
                            class="form-control"
                            id="exampleFormControlInput4"
                            placeholder="confirmar contraseña"
                            required
                        />
                    </div>
                    <Link
                        to={"/auth/ingresar"}
                        class="btn btn-outline-secondary"
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
