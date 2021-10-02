import React, { useState } from 'react'
import Menu from "./Menu";
import { Button, Modal ,Dropdown} from 'react-bootstrap';

// Definicion del Functional Component
const Ventas = () => {

    // Define estado del Component
    const [ showAdd, setShowAdd ] = useState(false);
    const [ showEdit, setShowEdit ] = useState(false);
    const [ showDelete, setShowDelete ] = useState(false);

    const handleCloseAdd = () => setShowAdd(false);
    const handleShowAdd = () => setShowAdd(true);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);
  

    return (
        <>
            <div className="container mb-5 pb-5 mt-5 pt-5">
                <div className="row">
                    <div className="col col-md-3">

                        <Menu />

                    </div>
                    <div className="col col-md-9">


                        { /* Component Modal (Add) react-bootstrap */ }
                        <Modal
                            show={ showAdd }
                            onHide={ handleCloseAdd }
                            backdrop="static"
                            keyboard={ false }
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Agregar Venta</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Cliente</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Pepito Perez"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Descripcion</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Tennis"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Total</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. $50000"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Fecha Inicial</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej: 2021-09-01"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Fecha Pago</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. 2021-09-01"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Responsable</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Luisa"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Estado</label>
                                    <Dropdown>
                                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Seleccione estado de la venta
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Creacion</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Embalaje</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Despacho</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Ruta</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Ubicacion</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Recepcion</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                   
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={ handleCloseAdd }>
                                    Cerrar
                                </Button>
                                <Button variant="primary">Guardar</Button>
                            </Modal.Footer>
                        </Modal>    { /* End - Component Modal (Add) react-bootstrap */ }

                        { /* Component Modal (Edit) react-bootstrap */ }
                        <Modal
                            show={ showEdit }
                            onHide={ handleCloseEdit }
                            backdrop="static"
                            keyboard={ false }
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Editar Venta</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Cliente</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Pepito"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Descripcion</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Tennis"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Total</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. $50000"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Fecha Inicial</label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej: 2021-09-01"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Fecha Pago</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. 2021-09-01"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Responsable</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Luisa"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Estado</label>
                                    <Dropdown>
                                     <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Seleccione estado de la venta
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Creacion</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Embalaje</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Despacho</Dropdown.Item>
                                        <Dropdown.Item href="#/action-1">Ruta</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Ubicacion</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Recepcion</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                   
                                </div>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={ handleCloseEdit }>
                                    Cerrar
                                </Button>
                                <Button variant="primary">Guardar</Button>
                            </Modal.Footer>
                        </Modal>    { /* End - Component Modal (Edit) react-bootstrap */ }

                        
                        { /* Component Modal (Eliminar) react-bootstrap */ }
                        <Modal
                            show={ showDelete }
                            onHide={ handleCloseDelete }
                            backdrop="static"
                            keyboard={ false }
                        >
                            <Modal.Header closeButton>
                            <Modal.Title>Eliminar Venta</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>¿Desea eliminar la venta?</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={ handleCloseDelete }>
                                    Cerrar
                                </Button>
                                <Button variant="primary">Guardar</Button>
                            </Modal.Footer>
                        </Modal>    { /* End - Component Modal (Eliminar) react-bootstrap */ }

                        <h2 class="center">Listado de Ventas</h2>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                                    { /*Component Button react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowAdd }>
                                        <i class="fas fa-plus"></i>
                                    </Button>

                                </ul>
                                <form class="d-flex">
                                    <input
                                        class="form-control me-2"
                                        type="search"
                                        placeholder="Ej:  luisa"
                                        aria-label="Search"
                                    />
                                    <button class="btn btn-outline-success" type="submit">
                                        <i class="fas fa-search"></i>
                                    </button>
                                </form>
                                </div>
                            </div>
                        </nav>
                        <table class="table">
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

                                    { /*Component Button (Edit) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowEdit }>
                                        <i
                                            class="fas fa-edit"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                        ></i>
                                    </Button>

                                    { /*Component Button (Delete) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowDelete }>
                                        <i
                                            class="fas fa-trash-alt"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                        ></i>
                                    </Button>

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

                                    { /*Component Button (Edit) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowEdit }>
                                        <i
                                            class="fas fa-edit"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                        ></i>
                                    </Button>

                                    { /*Component Button (Delete) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowDelete }>
                                        <i
                                            class="fas fa-trash-alt"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                        ></i>
                                    </Button>

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

                                    { /*Component Button (Edit) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowEdit }>
                                        <i
                                            class="fas fa-edit"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                        ></i>
                                    </Button>

                                    { /*Component Button (Delete) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowDelete }>
                                        <i
                                            class="fas fa-trash-alt"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                        ></i>
                                    </Button>

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

                                    { /*Component Button (Edit) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowEdit }>
                                        <i
                                            class="fas fa-edit"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                        ></i>
                                    </Button>

                                    { /*Component Button (Delete) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowDelete }>
                                        <i
                                            class="fas fa-trash-alt"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                        ></i>
                                    </Button>

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

                                    { /*Component Button (Edit) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowEdit }>
                                        <i
                                            class="fas fa-edit"
                                            data-bs-toggle="modal"
                                            data-bs-target="#editModal"
                                        ></i>
                                    </Button>

                                    { /*Component Button (Delete) react-bootstrap */ }
                                    <Button variant="primary" onClick={ handleShowDelete }>
                                        <i
                                            class="fas fa-trash-alt"
                                            data-bs-toggle="modal"
                                            data-bs-target="#deleteModal"
                                        ></i>
                                    </Button>

                                </td>
                            </tr>
                        </tbody>
                        </table>
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-end">
                                <li class="page-item disabled"><a class="page-link">Anterior</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Siguiente</a></li>
                            </ul>
                        </nav>


                        

                    </div>
                </div>
            </div>  
        </>
    )
}

export default Ventas