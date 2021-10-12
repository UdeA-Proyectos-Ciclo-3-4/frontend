import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
import ModalDelete from '../modals/ModalDelete';
import FormAddEdit from './formularios/FormAddEdit';
import FormDelete from './formularios/FormDelete';

// Functional Component
const ItemUsuario = ({ usuario, setUsuarios, deleteUsuario, updateUsuario }) => {
    // State Modal Components
    const
        [ stateModalDelete, setStateModalDelete ] = useState( false ),
        [ stateModalEdit, setStateModalEdit ] = useState( false );

    const handleMostrarUsuario = () => {
        console.log( 'Click handleMostrarUsuario' );
    }

    return (
        <tr key={ usuario._id }>
            <td onClick={ handleMostrarUsuario }>{ usuario[ 'nombre' ] }</td>
            <td onClick={ handleMostrarUsuario }>{ usuario[ 'rol' ]}</td>
            <td onClick={ handleMostrarUsuario }>{ usuario[ 'correo' ] }</td>
            <td className="icons">

                <ModalAddEdit
                    title={ "Editar Usuario" }
                    type={ "edit" }
                    stateModal={ stateModalEdit }
                    setStateModal={ setStateModalEdit }
                    component={
                        <FormAddEdit
                            type={ "edit" }
                            usuario={ usuario }
                            setStateModal={ setStateModalEdit }
                            updateUsuario={ updateUsuario }
                        />

                    }
                />
                <ModalDelete
                    title={ "Eliminar Usuario" }
                    stateModal={ stateModalDelete }
                    setStateModal={ setStateModalDelete }
                    component={
                        <FormDelete
                            usuario={ usuario }
                            message={ "¿Desea eliminar usuario?" }
                            setStateModal={ setStateModalDelete }
                            deleteUsuario={ deleteUsuario }
                        /> }
                />
                
            </td>
        </tr>
    )
}

export default ItemUsuario;