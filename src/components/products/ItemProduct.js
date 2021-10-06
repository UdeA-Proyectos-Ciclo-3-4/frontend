import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import ModalDelete from '../modals/ModalDelete';
import FormAddEdit from './forms/FormAddEdit';
import FormDelete from './forms/FormDelete';

// Functional Component
const ItemProduct = ({ product, setProducts, deleteProduct }) => {

    // State Modal Components
    const
        [ stateModalDelete, setStateModalDelete ] = useState( false ),
        [ stateModalEdit, setStateModalEdit ] = useState( false );

    const handleShowProduct = () => {
        console.log( 'Click handleShowProduct' );
    }

    return (
        <tr key={ product._id }>
            <td onClick={ handleShowProduct }>{ product[ '_id' ] }</td>
            <td onClick={ handleShowProduct }>{ product[ 'descripcion' ] }</td>
            <td onClick={ handleShowProduct }>${ product[ 'valorUnitario' ]}</td>
            <td onClick={ handleShowProduct }>{ product[ 'estado' ] }</td>
            <td onClick={ handleShowProduct }>{ product[ 'fechaIngreso' ]}</td>
            <td className="icons">

                <ModalAddEdit
                    title={ "Editar Producto" }
                    type={ "edit" }
                    stateModal={ stateModalEdit }
                    setStateModal={ setStateModalEdit }
                    component={
                        <FormAddEdit
                            product={ product }
                            setStateModal={ setStateModalEdit }
                        />
                    }
                />

                <ModalDelete
                    title={ "Eliminar Producto" }
                    stateModal={ stateModalDelete }
                    setStateModal={ setStateModalDelete }
                    component={
                        <FormDelete
                            product={ product }
                            message={ "¿Desea eliminar producto?" }
                            setStateModal={ setStateModalDelete }
                            deleteProduct={ deleteProduct }
                        /> }
                />

            </td>
        </tr>
    )
}

export default ItemProduct;
