import React, { useState } from 'react';

// Components
import Menu from '../Menu';
import TableVendedores from './TableVendedores';
import NavbarVendedor from './NavbarVendedor';

// Static Data
import initialState from '../../data/vendedores';

// Functional Component
const Vendedor = () => {

    // State Component
    const [ vendedores, setVendedores ] = useState( initialState );

    const addNewVendedor = ( newVendedor ) => {
        //console.log( addNewVendedor, newVendedor );

        setVendedores([
            ...vendedores,
            newVendedor
        ]);
    }

    const updateVendedor = ( vendedorToUpdate ) => {

        const listaVendedores = vendedores.filter( vendedor => (
            vendedor[ '_id' ] !== vendedorToUpdate[ '_id' ]
        ));

        listaVendedores.push( vendedorToUpdate );

        setVendedores( listaVendedores );

    }

    const deleteVendedor = ( vendedorToBeEliminated ) => {
        //console.log( 'deleteVendedor', vendedorToBeEliminated );

        setVendedores( vendedores.filter( vendedor => (
            vendedor[ '_id' ] !== vendedorToBeEliminated[ '_id' ]
        )));
    }

    return (
        <div className="container mb-5 pb-5 mt-5 pt-5">
            <div className="row">
                <div className="col col-md-3">

                    <Menu />

                </div>
                <div className="col col-md-9">

                    <NavbarVendedor
                        title={ "Listado de vendedores" }
                        addNewVendedor={ addNewVendedor }
                    />
                    <TableVendedores
                        vendedores={ vendedores }
                        setVendedores={ setVendedores }
                        deleteVendedor={ deleteVendedor }
                        updateVendedor={ updateVendedor }
                    />

                </div>
            </div>
        </div>
    )
};

export default Vendedor;