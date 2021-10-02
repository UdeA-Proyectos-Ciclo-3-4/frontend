import React from 'react';
import {Link} from "react-router-dom";

const RecuperarContraseña = () => {
    return (
        <>
            <div class="mt-5 container-fluid">
                <h3 class="row justify-content-center">Recupera tu contraseña</h3>
                <h5 class="row justify-content-center">Ingresa tu correo electrónico</h5>
                <div class="mt-5 container-fluid col col-md-4">
                    <div class="m-auto row justify-content-center align-items-center">
                        <div class="mb-3">
                            <label for="exampleFormControlInput1 " class="form-label">Correo electronico</label>
                            <input
                            type="email "
                            class="form-control"
                            id="exampleFormControlInput1 "
                            placeholder="correo@ejemplo.com "
                            />
                        </div>
                        <Link to={"/auth/ingresar"} 
                            class="btn btn-outline-secondary" 
                            role="button"
                            data-bs-toggle="modal"
                            data-bs-target="#confirModal"
                        >Enviar
                        </Link>
                    </div>
                </div>
                <div class="modal fade" id="confirModal" tabindex="-1" aria-labelledby="confirModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <i class="far fa-bell"></i>
                                <a href="./login.html">
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    </button>
                                </a>
                            </div>
                            <div class="modal-body">
                                <p>
                                    Se ha enviado un correo electronico con un enlace para que cambies tu contraseña
                                </p>
                            </div>
                            <div class="modal-footer">
                                <a href="./login.html">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                    Cerrar
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
        </>
    )
}

export default RecuperarContraseña
