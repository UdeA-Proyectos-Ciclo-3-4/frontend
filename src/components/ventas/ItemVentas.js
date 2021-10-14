import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import ModalDelete from '../modals/ModalDelete.js';
import FormAddEdit from './formularios/FormAddEdit';
import FormDelete from './formularios/FormDelete';

// Functional Component
const ItemVentas = ({ ventas, setVentas, deleteVenta, updateVenta }) => {

    // State Modal Components
    const
        [ stateModalDelete, setStateModalDelete ] = useState( false ),
        [ stateModalEdit, setStateModalEdit ] = useState( false );

    const handleShowVenta = () => {
        console.log( 'Click handleShowVenta' );
    }

    return (
        <tr key={ ventas._id }>
            <td onClick={ handleShowVenta }>{ ventas[ '_id' ] }</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'N_Factura' ] }</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'cliente' ]}</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'Descripcion' ] }</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'Total' ]}</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'FechaInicial' ]}</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'FechaPago' ]}</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'Responsable' ]}</td>
            <td onClick={ handleShowVenta }>{ ventas[ 'Estado' ]}</td>
            <td className="icons">

                <ModalAddEdit
                    title={ "Editar Venta" }
                    type={ "edit" }
                    stateModal={ stateModalEdit }
                    setStateModal={ setStateModalEdit }
                    component={
                        <FormAddEdit
                            type={ "edit" }
                            Venta={ ventas }
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
                            ventas={ ventas }
                            message={ "¿Desea eliminar la venta?" }
                            setStateModal={ setStateModalDelete }
                            deleteVendedor={ deleteVenta }
                        /> }
                />

            </td>
        </tr>
    )
}

export default ItemVentas;