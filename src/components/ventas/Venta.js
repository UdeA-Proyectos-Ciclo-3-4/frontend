import React, { useState } from 'react';

// Components
import Menu from '../Menu';
import TablaVentas from './TablaVentas';
import NavbarVentas from './NavbarVentas';

// Static Data
import initialState from '../../data/ventas';
console.log(initialState)
// Functional Component
const Venta = () => {

    // State Component
    const [ ventas, setVentas ] = useState( initialState );
    console.log( ventas )
    const addNewVenta = ( newVenta ) => {
        //console.log( addNewVenta, newVenta );

        setVentas([
            ...ventas,
            newVenta
        ]);
    }

    const updateVenta = ( VentasToUpdate ) => {

        const listaVentas = ventas.filter( ventas => (
            ventas[ '_id' ] !== VentasToUpdate[ '_id' ]
        ));

        listaVentas.push( VentasToUpdate );

        setVentas( listaVentas );

    }

    const deleteVenta = ( VentasToBeEliminated ) => {
        //console.log( 'deleteVentas', VentasToBeEliminated );

        setVentas( ventas.filter( Ventas => (
            Ventas[ '_id' ] !== VentasToBeEliminated[ '_id' ]
        )));
    }

    return (
        <div className="container mb-5 pb-5 mt-5 pt-5">
            <div className="row">
                <div className="col col-md-3">

                    <Menu />

                </div>
                <div className="col col-md-9">

                    <NavbarVentas
                        title={ "Listado de ventas" }
                        addNewVentas={ addNewVenta }
                    />
                    <TablaVentas
                        ventas={ ventas }
                        setVentas={ setVentas }
                        deleteVenta={ deleteVenta }
                        updateVenta={ updateVenta }
                    />

                </div>
            </div>
        </div>
    )
};

export default Venta;