import React from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import ModalDelete from '../modals/ModalDelete';
import FormAddEdit from './forms/FormAddEdit';
import FormDelete from './forms/FormDelete';

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

                <ModalAddEdit title={ "Editar Producto" } type={ "edit" } component={ <FormAddEdit /> } />
                <ModalDelete title={ "Eliminar Producto" } component={ <FormDelete message={ "¿Desea eliminar producto?" } /> } />

            </td>
        </tr>
    )
}

export default ItemProduct;
