import React from 'react'
import Menu from "./Menu";

const Ventas = () => {
    return (
        <>
            <div className="container mb-5 pb-5 mt-5 pt-5">
                <div className="row">
                    <div className="col col-md-3">

                        <Menu />

                    </div>
                    <div className="col col-md-9">

                        <p>
                            <h2 class="center">Listado de ventas</h2>
                            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                                            <i class="fas fa-plus"></i>
                                            </button>
                                        </ul>
                                        <form class="d-flex">
                                            <input class="form-control me-2" type="search" placeholder="Ej: Pepito Perez" aria-label="Search" />
                                            <button class="btn btn-outline-success" type="submit">
                                            <i class="fas fa-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </nav>
                        
                            <table class="table">
                                <caption>
                                    Listado de ventas activas 2021
                                </caption>
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Descripcion</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Fecha Inicial</th>
                                    <th scope="col">Fecha Pago</th>
                                    <th scope="col">Responsable</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>

                                    <td>Pepito Perez</td>
                                    <td>Botas</td>
                                    <td>$120000</td>
                                    <td>2021-09-01</td>
                                    <td>2021-09-05</td>
                                    <td>Miguel</td>
                                    <td>Creacion</td>
                                    <td class="icons">
                                        <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                        <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>

                                    <td>Alexa Mendez</td>
                                    <td>Zandalias</td>
                                    <td>$80000</td>
                                    <td>2021-10-03</td>
                                    <td>2021-10-03</td>
                                    <td>Luisa</td>
                                    <td>Embalaje</td>

                                    <td class="icons">
                                        <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                        <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>

                                    <td>Nestor Ramos</td>
                                    <td>Guantes</td>
                                    <td>$45000</td>
                                    <td>2021-10-09</td>
                                    <td>2021-10-09</td>
                                    <td>Alba</td>
                                    <td>Despacho</td>
                                    <td class="icons">
                                        <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                        <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>4</td>

                                    <td>Diego Prieto</td>
                                    <td>Bolso</td>
                                    <td>$80000</td>
                                    <td>2021-07-07</td>
                                    <td>2021-07-07</td>
                                    <td>Caro</td>
                                    <td>Ruta</td>
                                    <td class="icons">
                                        <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                        <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                    </td>
                                </tr>
                                <tr>
                                    <td>5</td>

                                    <td>Daniel Santos</td>
                                    <td>Cinturon</td>
                                    <td>$25000</td>
                                    <td>2021-04-15</td>
                                    <td>2021-06-06</td>
                                    <td>Juan</td>
                                    <td>Recepcion</td>
                                    <td class="icons">
                                        <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                        <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                                    </td>
                                </tr>
                            </tbody>
                            </table>

                            <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title">Agregar/Editar Ventas</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Cliente</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Ej. Maria Perez"
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Descripcion</label
                                                >
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Ej. producto.."
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleFormControlInput1" class="form-label">Total</label
                                                >
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Ej. $ 15.000."
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="exampleFormControlInput1"
                                                    class="form-label">Fecha inicial</label
                                                >
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Ej. 2021/09/02."
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label
                                                    for="exampleFormControlInput1"class="form-label">Fecha de pago</label
                                                >
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Ej. 2021/09/10."
                                                />
                                            </div>
                                            <div class="mb-3">
                                                <label 
                                                    for="exampleFormControlInput1"class="form-label">Responsable</label
                                                >
                                                <input
                                                    type="tel"
                                                    class="form-control"
                                                    id="exampleFormControlInput1"
                                                    placeholder="Ej. Juan torres"
                                                />
                                            </div>
                                            <div class="form-floating">
                                                <select
                                                    class="form-select"
                                                    id="floatingSelect"
                                                    aria-label="Floating label select example"
                                                >
                                                    <option selected>Seleccione estado de venta</option>
                                                    <option value="1">Creacion</option>
                                                    <option value="2">Embalaje</option>
                                                    <option value="3">Despacho</option>
                                                    <option value="4">Ruta</option>
                                                    <option value="5">Ubicacion</option>
                                                    <option value="6">Recepcion</option>
                                                </select>
                                                <label
                                                    for="floatingSelect">Estado</label>
                                            </div>
                                                <br />
                                                <caption>
                                                    Ultima fecha de ingreso 2021-09-21
                                                </caption>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar
                                                </button>
                                                <button type="button" class="btn btn-primary">Guardar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Eliminar ventas</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <p>¿Desea eliminar la venta?</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar
                                                </button>
                                                <button type="button" class="btn btn-primary">Eliminar</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-end">
                                        <li class="page-item disabled">
                                            <a class="page-link">Anterior</a>
                                        </li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">Siguiente</a>
                                        </li>
                                    </ul>
                                </nav>

                            </p>

                    </div>
                </div>
            </div>  
        </>
    )
}

export default Ventas
