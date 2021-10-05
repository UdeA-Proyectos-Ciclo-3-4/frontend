import React from 'react';

import AddEditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';

// Functional Component
const ItemProduct = ({ product, setProducts }) => {

    const handleShowProduct = () => {
        console.log( 'Click Show' );
    }

    return (
        <tr key={ product._id }>
            <td onClick={ handleShowProduct }>{ product[ '_id' ] }</td>
            <td onClick={ handleShowProduct }>{ product[ 'descripcion' ] }</td>
            <td onClick={ handleShowProduct }>${ product[ 'valorUnitario' ]}</td>
            <td onClick={ handleShowProduct }>{ product[ 'estado' ] }</td>
            <td onClick={ handleShowProduct }>{ product[ 'fechaIngreso' ]}</td>
            <td className="icons">

                <AddEditProduct />
                <DeleteProduct />

            </td>
        </tr>
    )
}

export default ItemProduct;
