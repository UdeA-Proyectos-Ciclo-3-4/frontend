import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import FormAddEdit from './formularios/FormAddEdit';

import { initialStateUsuarios } from '../../data/usuarios';

// Functional Component
const NavbarUsuario = ({ title, addNewUsuario }) => {

    // State Component
    const
        [ stateModalAdd, setStateModalAdd ] = useState( false ),
        [ usuario, setUsuario ] = useState( initialStateUsuarios );

    return (
        <>
            <h2 className="center">{ title }</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <ModalAddEdit
                                title={ "Agregar Usuario" }
                                type={ "add" }
                                stateModal={ stateModalAdd }
                                setStateModal={ setStateModalAdd }
                                component={
                                    <FormAddEdit
                                        type={ "add" }
                                        usuario={ usuario }
                                        setUsuario={ setUsuario }
                                        setStateModal={ setStateModalAdd }
                                        addNewUsuario={ addNewUsuario }
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

export default NavbarUsuario;