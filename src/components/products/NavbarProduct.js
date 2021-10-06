import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import FormAddEdit from './forms/FormAddEdit';

// Functional Component
const NavbarProduct = ({ title }) => {

    const [ stateModalAdd, setStateModalAdd ] = useState( false );

    const [ product, setProduct ] = useState({
        _id: '',
        descripcion: '',
        valorUnitario: '',
        estado: '',
        fechaIngreso: ''
    });

    return (
        <>
            <h2 className="center">{ title }</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <ModalAddEdit
                                title={ "Agregar Producto" }
                                type={ "add" }
                                stateModal={ stateModalAdd }
                                setStateModal={ setStateModalAdd }
                                component={
                                    <FormAddEdit
                                        product={ product }
                                        setStateModal={ setStateModalAdd }
                                    />
                                }
                            />

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
        </>
    )
}

export default NavbarProduct;
