import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Menu from './Menu';

// Functional Component
const Productos = () => {

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
                        <Modal.Title>Agregar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Ej. Tennis"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Valor unitario</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Ej: 90"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Estado</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Disponible
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        checked
                                    />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        No Disponible
                                    </label>
                                </div>
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
                        <Modal.Title>Editar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Description</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Ej. Tennis"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Valor unitario</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="exampleFormControlInput1"
                                    placeholder="Ej: 90"
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Estado</label>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault1"
                                    />
                                    <label className="form-check-label" for="flexRadioDefault1">
                                        Disponible
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        checked
                                    />
                                    <label className="form-check-label" for="flexRadioDefault2">
                                        No Disponible
                                    </label>
                                </div>
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
                        <Modal.Title>Eliminar Producto</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>¿Desea eliminar el producto?</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={ handleCloseDelete }>
                                Cerrar
                            </Button>
                            <Button variant="primary">Guardar</Button>
                        </Modal.Footer>
                    </Modal>    { /* End - Component Modal (Eliminar) react-bootstrap */ }

                    <h2 className="center">Listado de productos</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                { /*Component Button react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowAdd }>
                                    <i className="fas fa-plus"></i>
                                </Button>

                            </ul>
                            <form className="d-flex">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Ej: Tennis para niña"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">
                                    <i className="fas fa-search"></i>
                                </button>
                            </form>
                            </div>
                        </div>
                    </nav>
                    <table className="table">
                        <thead className="table-dark">
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Descripción</th>
                            <th scope="col">Valor unitario</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Fecha ingreso</th>
                            <th scope="col">&nbsp;</th>
                            </tr>
                        </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Camiseta Hombre</td>
                            <td>$50000</td>
                            <td>disponible</td>
                            <td>2021-09-01</td>
                            <td className="icons">

                                { /*Component Button (Edit) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowEdit }>
                                    <i
                                        className="fas fa-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                    ></i>
                                </Button>

                                { /*Component Button (Delete) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowDelete }>
                                    <i
                                        className="fas fa-trash-alt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                    ></i>
                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Camiseta mujer</td>
                            <td>$45000</td>
                            <td>disponible</td>
                            <td>2021-09-01</td>
                            <td className="icons">

                                { /*Component Button (Edit) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowEdit }>
                                    <i
                                        className="fas fa-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                    ></i>
                                </Button>

                                { /*Component Button (Delete) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowDelete }>
                                    <i
                                        className="fas fa-trash-alt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                    ></i>
                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Gorra deportiva</td>
                            <td>$15000</td>
                            <td>no disponible</td>
                            <td>2021-04-03</td>
                            <td className="icons">

                                { /*Component Button (Edit) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowEdit }>
                                    <i
                                        className="fas fa-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                    ></i>
                                </Button>

                                { /*Component Button (Delete) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowDelete }>
                                    <i
                                        className="fas fa-trash-alt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                    ></i>
                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Buso hombre</td>
                            <td>$55000</td>
                            <td>disponible</td>
                            <td>2021-03-23</td>
                            <td className="icons">

                                { /*Component Button (Edit) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowEdit }>
                                    <i
                                        className="fas fa-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                    ></i>
                                </Button>

                                { /*Component Button (Delete) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowDelete }>
                                    <i
                                        className="fas fa-trash-alt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                    ></i>
                                </Button>

                            </td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Buso mujer</td>
                            <td>$65000</td>
                            <td>no disponible</td>
                            <td>2021-02-11</td>
                            <td className="icons">

                                { /*Component Button (Edit) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowEdit }>
                                    <i
                                        className="fas fa-edit"
                                        data-bs-toggle="modal"
                                        data-bs-target="#editModal"
                                    ></i>
                                </Button>

                                { /*Component Button (Delete) react-bootstrap */ }
                                <Button variant="primary" onClick={ handleShowDelete }>
                                    <i
                                        className="fas fa-trash-alt"
                                        data-bs-toggle="modal"
                                        data-bs-target="#deleteModal"
                                    ></i>
                                </Button>

                            </td>
                        </tr>
                    </tbody>
                    </table>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled"><Link to={ "" } className="page-link">Anterior</Link></li>
                            <li className="page-item"><Link to={ "" } className="page-link" href="#">1</Link></li>
                            <li className="page-item"><Link to={ "" } className="page-link" href="#">2</Link></li>
                            <li className="page-item"><Link to={ "" } className="page-link" href="#">3</Link></li>
                            <li className="page-item"><Link to={ "" } className="page-link" href="#">Siguiente</Link></li>
                        </ul>
                    </nav>


                </div>
            </div>
        </div>
    )
}

export default Productos
