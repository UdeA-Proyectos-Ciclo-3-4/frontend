import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import vendedores from '../../../data/vendedores';

// Functional Component
const FormDelete = ({ message, setStateModal, vendedor, deleteVendedor }) => {

    const handleCloseModal = () => {
        console.log( 'handleClose Modal' );
        setStateModal( false );
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit Delete', vendedor,vendedores );
        deleteVendedor( vendedor );
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