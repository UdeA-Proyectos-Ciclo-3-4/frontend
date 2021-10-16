import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import ModalDelete from '../modals/ModalDelete.js';
import FormAddEdit from './formularios/FormAddEdit';
import FormDelete from './formularios/FormDelete';

import { convertDate } from '../../libs/convertDate';

// Functional Component
const ItemVendedor = ({ vendedor, setVendedores, deleteVendedor, updateVendedor }) => {

    // State Modal Components
    const
        [ stateModalDelete, setStateModalDelete ] = useState( false ),
        [ stateModalEdit, setStateModalEdit ] = useState( false );

    const handleShowVendedor = () => {
        console.log( 'Click handleShowVendedor' );
    }

    return (
        <tr>
            <td onClick={ handleShowVendedor }>{ vendedor[ 'nombre' ] }</td>
            <td onClick={ handleShowVendedor }>{ vendedor[ 'especialidad' ]}</td>
            <td onClick={ handleShowVendedor }>{ vendedor[ 'celular' ] }</td>
            <td onClick={ handleShowVendedor }>{ convertDate(vendedor[ 'fechaIngreso' ])}</td>
            <td className="icons">

                <ModalAddEdit
                    title={ "Editar Vendedor" }
                    type={ "edit" }
                    stateModal={ stateModalEdit }
                    setStateModal={ setStateModalEdit }
                    component={
                        <FormAddEdit
                            type={ "edit" }
                            vendedor={ vendedor }
                            setStateModal={ setStateModalEdit }
                            updateVendedor={ updateVendedor }
                        />
                    }
                />

                <ModalDelete
                    title={ "Eliminar Vendedor" }
                    stateModal={ stateModalDelete }
                    setStateModal={ setStateModalDelete }
                    component={
                        <FormDelete
                            vendedor={ vendedor }
                            message={ "¿Desea eliminar vendedor?" }
                            setStateModal={ setStateModalDelete }
                            deleteVendedor={ deleteVendedor }
                        /> }
                />

            </td>
        </tr>
    )
}

export default ItemVendedor;