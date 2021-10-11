import React, { useState, useEffect } from 'react';

// Components
import Menu from '../Menu';
import TableProducts from './TableProducts';
import NavbarProduct from './NavbarProduct';

// Static Data
import initialState, { initialStateProducts } from '../../data/products';

const apiUrl = "http://localhost:5003/api/productos";

// Functional Component
const Products = () => {

    // State Component
    const
        [ products, setProducts ] = useState([]);


    useEffect( () => {
        async function getProductsfromAPI() {
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

            /** Verifica si se obtubieron los datos existosamente */
            if ( data.success ) {
                console.log( data );
                setProducts( data.productos );          // Asigna la data del API al State Component
            }
            else {
                console.log(`Load static data`);
                setProducts( initialStateProducts );    // Asigna la data por defecto (estatica) al State Component
            }

        }

        getProductsfromAPI();

    }, [] );

    const addNewProduct = ( newProduct ) => {

        setProducts([
            ...products,
            newProduct
        ]);
    }

    const updateProduct = ( productToUpdate ) => {

        const listaProductos = products.filter( product => (
            product[ '_id' ] !== productToUpdate[ '_id' ]
        ));

        listaProductos.push( productToUpdate );

        setProducts( listaProductos );

    }

    const deleteProduct = ( productToBeEliminated ) => {

        setProducts( products.filter( product => (
            product[ '_id' ] !== productToBeEliminated[ '_id' ]
        )));
    }

    return (
        <div className="container mb-5 pb-5 mt-5 pt-5">
            <div className="row">
                <div className="col col-md-3">

                    <Menu />

                </div>
                <div className="col col-md-9">

                    <NavbarProduct
                        title={ "Listado de productos" }
                        addNewProduct={ addNewProduct }
                    />
                    <TableProducts
                        products={ products }
                        setProducts={ setProducts }
                        deleteProduct={ deleteProduct }
                        updateProduct={ updateProduct }
                    />

                </div>
            </div>
        </div>
    )
};

export default Products;