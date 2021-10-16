import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import FormAddEdit from './forms/FormAddEdit';

import { initialStateVentas } from '../../data/ventas';

// Functional Component
const NavbarVentas = ({ title, addNewVenta }) => {

    // State Component
    const
        [ stateModalAdd, setStateModalAdd ] = useState( false ),
        [ venta, setVenta    ] = useState( initialStateVentas );

    return (
        <>
            <h2 className="center">{ title }</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <ModalAddEdit
                                title={ "Agregar Venta" }
                                type={ "add" }
                                stateModal={ stateModalAdd }
                                setStateModal={ setStateModalAdd }
                                component={
                                    <FormAddEdit
                                        type={ "add" }
                                        venta={ venta }
                                        setVenta={ setVenta }
                                        setStateModal={ setStateModalAdd }
                                        addNewVenta={ addNewVenta }
                                    />
                                }
                            />

                        </ul>
                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Ej: luisa"
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

export default NavbarVentas;