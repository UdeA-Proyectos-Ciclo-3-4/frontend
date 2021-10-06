import React, { useState } from 'react';

// Components
import Menu from '../Menu';
import TableProducts from './TableProducts';
import NavbarProduct from './NavbarProduct';

// Static Data
import initialState from '../../data/products';

// Functional Component
const Products = () => {

    // State Component
    const [ products, setProducts ] = useState( initialState );

    const addNewProduct = ( newProduct ) => {
        //console.log( addNewProduct, newProduct );

        setProducts([
            ...products,
            newProduct
        ]);
    }

    const deleteProduct = ( productToBeEliminated ) => {
        //console.log( 'deleteProduct', productToBeEliminated );

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
                    />

                </div>
            </div>
        </div>
    )
};

export default Products;