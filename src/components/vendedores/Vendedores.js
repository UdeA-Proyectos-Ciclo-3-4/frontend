import React, { useState, useEffect } from 'react';

// Components
import Menu from '../Menu';
import TableVendedores from './TableVendedores';
import NavbarVendedor from './NavbarVendedor';

// Static Data
import { initialStateVendedores } from '../../data/vendedores';

const apiUrl = "http://localhost:5000/api/vendedores";

// Functional Component
const Vendedores = () => {

    // State Component
    const [ vendedores, setVendedores ] = useState([]);

    // ! (1) Peticion a la API para obtener todos los registros
    const getVendedoresfromAPI = async () => {
        /** Consulta la data de productos a la API */
        const response = await fetch( apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });

        /** Obtiene la data */
        let data  = await response.json();
        console.log( data );

        return data;
    }

    // ! (1) Peticion a la API para crear un nuevo registro
    const addVendedorAPI = async ( newVendedor ) => {
        /** Consulta para registrar data de productos en la API */
        const response = await fetch( apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( newVendedor )
        });

        /** Obtiene la data */
        let data  = await response.json();
        console.log( data );

        return data;
    }

    useEffect( () => {
        const getAllProducts = async () => {
            const data = await getVendedoresfromAPI();        // ! (2) Invoca la Peticion para obtener la data
            console.log( 'GET', data );

            /** Verifica si se obtubieron los datos existosamente */
            if ( data.success ) {
                console.log( data );
                setVendedores( data.vendedores );          // Asigna la data del API al State Component
            }
            else {
                console.log(`Load static data`);
                setVendedores( initialStateVendedores );    // Asigna la data por defecto (estatica) al State Component
            }
        }

        getAllProducts();

    }, [] );

    const addNewVendedor = async ( newVendedor ) => {
        const data = await addVendedorAPI( newVendedor );     // ! (2) Invoca la Peticion para obtener la data
        console.log( 'UPDATE', data );
        console.log( 'Vendedores', vendedores );

        setVendedores([
            data.vendedor,
            ...vendedores
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

export default Vendedores;