import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Functional Component
const FormDelete = ({ message, setStateModal }) => {

    const handleSave = () => {
        console.log( 'handleSave Delete' );
    }

    const handleCloseModal = () => {
        console.log( 'handleClose Modal' );
        setStateModal( false );
    }

    return (
        <>
            <p>{ message }</p>
            <Modal.Footer>
                <Button variant="secondary" onClick={ handleCloseModal }>
                    Cerrar
                </Button>
                <Button variant="primary" onClick={ handleSave }>Guardar</Button>
            </Modal.Footer>
        </>
    )
}

export default FormDelete;
