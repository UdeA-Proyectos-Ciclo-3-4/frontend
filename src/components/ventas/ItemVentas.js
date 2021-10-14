import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import ModalDelete from '../modals/ModalDelete.js';
import FormAddEdit from './forms/FormAddEdit';
import FormDelete from './forms/FormDelete';

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
            <td onClick={ handleShowVenta }>{ venta[ '_id' ] }</td>
            <td onClick={ handleShowVenta }>{ venta[ 'N_Factura' ] }</td>
            <td onClick={ handleShowVenta }>{ venta[ 'cliente' ]}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'Descripcion' ] }</td>
            <td onClick={ handleShowVenta }>{ venta[ 'Total' ]}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'FechaInicial' ]}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'FechaPago' ]}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'Responsable' ]}</td>
            <td onClick={ handleShowVenta }>{ venta[ 'Estado' ]}</td>
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