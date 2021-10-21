import React, { useState, useEffect } from 'react';

// Components
import Menu from '../Menu';
import TableProducts from './TableProducts';
import NavbarProduct from './NavbarProduct';

// Static Data
import { initialStateProducts } from '../../data/products';

const apiUrl = "https://peaceful-springs-82264.herokuapp.com/api/productos";

// Functional Component
const Products = () => {

    // State Component
    const
        [ products, setProducts ] = useState([]);

    // ! (1) Peticion a la API para obtener todos los registros
    const getProductsfromAPI = async () => {
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
    const addProductAPI = async ( newProduct ) => {
        /** Consulta para registrar data de productos en la API */
        const response = await fetch( apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( newProduct )
        });

        /** Obtiene la data */
        let data  = await response.json();
        console.log( data );

        return data;
    }

    // ! (1) Peticion a la API para actualizar un registro
    const updateProductAPI = async ( productToUpdate ) => {
        console.log( `URL: ${ apiUrl }/${ productToUpdate._id }` );
        /** Consulta para actualizar data de productos en la API */
        const response = await fetch( `${ apiUrl }/${ productToUpdate._id }`, {
            method: 'PUT'                                                               ,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( productToUpdate )
        });

        /** Obtiene la data */
        const data = await response.json();
        console.log( data );

        return data;
    }

        // ! (1) Peticion a la API para actualizar un registro
        const deleteProductAPI = async ( productToUpdate ) => {
            console.log( `URL: ${ apiUrl }/${ productToUpdate._id }` );
            /** Consulta para actualizar data de productos en la API */
            const response = await fetch( `${ apiUrl }/${ productToUpdate._id }`, {
                method: 'DELETE'                                                               ,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify( productToUpdate )
            });

            /** Obtiene la data */
            const data = await response.json();
            console.log( data );

            return data;
        }

    useEffect( () => {
        const getAllProducts = async () => {
            const data = await getProductsfromAPI();        // ! (2) Invoca la Peticion para obtener la data
            console.log( 'GET', data );

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

        getAllProducts();

    }, [] );

    const addNewProduct = async ( newProduct ) => {

        const data = await addProductAPI( newProduct );     // ! (2) Invoca la Peticion para obtener la data
        console.log( 'UPDATE', data );

        setProducts([
            data.producto,
            ...products
        ]);
    }

    const updateProduct = async ( productToUpdate ) => {

        const data = await updateProductAPI( productToUpdate );     // ! (2) Invoca la Peticion para obtener la data
        console.log( 'UPDATE', data );

        const listaProductos = products.filter( product => (
            product[ '_id' ] !== productToUpdate[ '_id' ]
        ));

        listaProductos.unshift( data.producto );

        setProducts( listaProductos );
    }

    const deleteProduct = async ( productToBeEliminated ) => {

        const data = await deleteProductAPI( productToBeEliminated );
        console.log( 'DELETE', data );

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