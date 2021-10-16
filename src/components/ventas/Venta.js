import React, { useState, useEffect } from 'react';

// Components
import Menu from '../Menu';
import TablaVentas from './TablaVentas';
import NavbarVentas from './NavbarVentas';

// Static Data
import initialStateVentas from '../../data/ventas';

const apiUrl = "http://localhost:5000/api/ventas";

// Functional Component
const Venta = () => {

    // State Component
    const
        [ ventas, setVentas ] = useState([]);
    
    const getVentasfromAPI = async() => {
        /** Consulta la data de productos a la API */
        const response = await fetch( apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        /** Obtiene la data */
        let data = await response.json();
        console.log(data);

        return data;
    }


    //Peticion a la API para crear un nuevo registro
    const addVentaAPI = async( newVenta ) => {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( newVenta )
        });

        let data = await response.json();
        console.log(data);
        return data;
    }

    useEffect(() => {
        const getAllVentas = async() => {
            const data = await getVentasfromAPI();
            console.log( 'GET', data );

            if( data.success){
                console.log(data);
                setVentas(data.ventas);
            }else{
                console.log(`Load static data`);
                setVentas(initialStateVentas);
            }
        }
        getAllVentas();

    }, []);


    const addNewVenta = async( newVenta ) => {
        
        const data = await addVentaAPI( newVenta );

        console.log( 'UPDATE', data );
        
        setVentas([
            data.venta,
            ...ventas
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
                        addNewVenta={ addNewVenta }
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