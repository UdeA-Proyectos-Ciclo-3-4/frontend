import React, { useState } from 'react'
import Menu from "./Menu";
import { Button, Modal } from 'react-bootstrap';

// Definicion del Functional Component
const Vendedores = () => {
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
                            <Modal.Title>Agregar Vendedor</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nombres</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Eva Sofia"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Especialidad</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Pendiente.."
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Celular</label>
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. 310.."
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Fecha Ingreso</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. 2021-09-01"
                                    />
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
                            <Modal.Title>Editar Vendedor</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Nombres</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. Eva Sofia"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Especialidad</label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Pendiente.."
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Celular</label>
                                    <input
                                        type="tel"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. 310.."
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Fecha Ingreso</label>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Ej. 2021-09-01"
                                    />
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
                            <Modal.Title>Eliminar Vendedor</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>¿Desea eliminar el vendedor?</p>
                            </Modal.Body>
 
                            <Modal.Footer>
                                <Button variant="secondary" onClick={ handleCloseDelete }>
                                    Cerrar
                                </Button>
                                <Button variant="primary">Guardar</Button>
                            </Modal.Footer>
                        </Modal>    { /* End - Component Modal (Eliminar) react-bootstrap */ }
 
                        <h2 class="center">Listado de vendedores</h2>
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
                                        placeholder="Ej: Leonardo Linero"
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
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Especialidad</th>
                                    <th scope="col">Celular</th>
                                    <th scope="col">Fecha ingreso</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ana Maria</td>
                                <td>Joyería</td>
                                <td>3193203455</td>
                                <td>2021-09-01</td>
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
                                <td>Luisa Bazalar</td>
                                <td>Moda</td>
                                <td>3114301232</td>
                                <td>2021-09-01</td>
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
                                <td>Manuela Gomez</td>
                                <td>Bisutería</td>
                                <td>3119024563</td>
                                <td>2021-04-03</td>
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
                                <td>Elisa Giraldo</td>
                                <td>Muebles hogar</td>
                                <td>3002115211</td>
                                <td>2021-03-23</td>
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
                                <td>Juliana Puerta</td>
                                <td>Moda</td>
                                <td>3157126113</td>
                                <td>2021-02-11</td>
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

export default Vendedores
