import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import ModalDelete from '../modals/ModalDelete';
import FormAddEdit from './forms/FormAddEdit';
import FormDelete from './forms/FormDelete';

import { convertDate } from '../../libs/convertDate';

// Functional Component
const ItemVentas = ({ venta, setVentas, deleteVenta, updateVenta }) => {
// console.log(venta)
    // State Modal Components
    const
        [ stateModalDelete, setStateModalDelete ] = useState( false ),
        [ stateModalEdit, setStateModalEdit ] = useState( false );

    const handleShowVenta = () => {
        console.log( 'Click handleShowVenta' );
    }

    return (
        <tr key={ venta._id }>
            <td onClick={ handleShowVenta }>{ venta[ 'factura' ] }</td>
            <td onClick={ handleShowVenta }>{ venta[ 'cliente' ]}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'descripcion' ] }</td>
            <td onClick={ handleShowVenta }>${ venta[ 'total' ]}</td>
            <td onClick={ handleShowVenta }>{ convertDate (venta[ 'fechaPago' ])}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'responsable' ]}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'estado' ]}</td>
            <td className="icons">

                <ModalAddEdit
                    title={ "Editar Venta" }
                    type={ "edit" }
                    stateModal={ stateModalEdit }
                    setStateModal={ setStateModalEdit }
                    component={
                        <FormAddEdit
                            type={ "edit" }
                            venta={ venta }
                            setStateModal={ setStateModalEdit }
                            updateVenta={ updateVenta }
                        />
                    }
                />

                <ModalDelete
                    title={ "Eliminar Venta" }
                    stateModal={ stateModalDelete }
                    setStateModal={ setStateModalDelete }
                    component={
                        <FormDelete
                            venta={ venta }
                            message={ "¿Desea eliminar la venta?" }
                            setStateModal={ setStateModalDelete }
                            deleteVenta={ deleteVenta }
                        /> }
                />

            </td>
        </tr>
    )
}

export default ItemVentas;