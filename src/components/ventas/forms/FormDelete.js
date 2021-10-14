import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import ventas from '../../../data/ventas';

// Functional Component
const FormDelete = ({ message, setStateModal, venta, deleteVenta }) => {

    const handleCloseModal = () => {
        console.log( 'handleClose Modal' );
        setStateModal( false );
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit Delete', venta );
        deleteVenta( venta );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ message }</p>
            <Modal.Footer>
                <Button variant="secondary" onClick={ handleCloseModal }>
                    Cerrar
                </Button>
                <Button type="submit" variant="primary">Borrar</Button>
            </Modal.Footer>
        </form>
    )
}

export default FormDelete;