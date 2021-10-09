import React, { useState } from 'react';

// Components
import Menu from '../Menu';
import TableUsuarios from './TableUsuarios';
// import NavbarProduct from './NavbarProduct';

// Static Data
import initialState from '../../data/usuarios';

// Functional Component
const Usuario = () => {

    // State Component
    const [ usuarios, setUsuarios ] = useState( initialState );

    const addNewUsuario = ( newUsuario ) => {
        //console.log( addNewProduct, newProduct );

        setUsuarios([
            ...usuarios,
            newUsuario
        ]);
    }

    const updateUsuario = ( usuarioToUpdate ) => {

        const listaUsuarios = usuarios.filter( usuario => (
            usuario[ '_id' ] !== usuarioToUpdate[ '_id' ]
        ));

        listaUsuarios.push( usuarioToUpdate );

        setUsuarios( listaUsuarios );

    }

    const deleteUsuario = ( usuarioToBeEliminated ) => {
        //console.log( 'deleteProduct', usuarioToBeEliminated );

        setUsuarios( usuarios.filter( usuario => (
            usuario[ '_id' ] !== usuarioToBeEliminated[ '_id' ]
        )));
    }

    return (
        <div className="container mb-5 pb-5 mt-5 pt-5">
            <div className="row">
                <div className="col col-md-3">

                    <Menu />

                </div>
                <div className="col col-md-9">

                    {/* <NavbarUsuario
                        title={ "Listado de usuarios" }
                        addNewUsuario={ addNewUsuario }
                    /> */}
                    <TableUsuarios
                        usuarios={ usuarios }
                        setUsuarios={ setUsuarios }
                        deleteUsuario={ deleteUsuario }
                        updateUsuario={ updateUsuario }
                    />

                </div>
            </div>
        </div>
    )
};

export default Usuario;
