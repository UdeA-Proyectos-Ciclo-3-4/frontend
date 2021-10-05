import React, { useState } from 'react';

// Components
import Menu from '../Menu';
import TableProducts from './TableProducts';
import NavbarProduct from './NavbarProduct';

// Static Data
import initialState from '../../data/products'

// Functional Component
const Products = () => {

    // State Component
    const [ products, setProducts ] = useState( initialState );

    console.log( products );

    return (
        <div className="container mb-5 pb-5 mt-5 pt-5">
            <div className="row">
                <div className="col col-md-3">

                    <Menu />

                </div>
                <div className="col col-md-9">

                    <NavbarProduct />
                    <TableProducts products={ products } setProducts={ setProducts } />

                </div>
            </div>
        </div>
    )
};

export default Products;