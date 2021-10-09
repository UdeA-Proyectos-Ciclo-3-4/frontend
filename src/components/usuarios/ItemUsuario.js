import React, { useState } from 'react';

import ModalAddEdit from '../modals/ModalAddEdit';
// import ModalDelete from '../modals/ModalDelete';
import FormAddEdit from './formularios/FormAddEdit';
// import FormDelete from './forms/FormDelete';

// Functional Component
const ItemUsuario = ({ usuario, setUsuarios, deleteUsuario, updateUsuario }) => {

    // State Modal Components
    const
    //    [ stateModalDelete, setStateModalDelete ] = useState( false ),
        [ stateModalEdit, setStateModalEdit ] = useState( false );

    const handleMostrarUsuario = () => {
        console.log( 'Click handleMostrarUsuario' );
    }

    return (
        <tr >
            <td onClick={ handleMostrarUsuario }>{ usuario[ '_id' ] }</td>
            <td onClick={ handleMostrarUsuario }>{ usuario[ 'nombre' ] }</td>
            <td onClick={ handleMostrarUsuario }>{ usuario[ 'rol' ]}</td>
            <td onClick={ handleMostrarUsuario }>{ usuario[ 'correo' ] }</td>
            
            <td className="icons">
                <ModalAddEdit
                    title={ "Editar Producto" }
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

                
            </td>
        </tr>
    )
}

export default ItemUsuario;