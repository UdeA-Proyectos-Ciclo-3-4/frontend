import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Functional Component
const FormDelete = ({ message, setStateModal }) => {

    const handleCloseModal = () => {
        console.log( 'handleClose Modal' );
        setStateModal( false );
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit Delete' )
        //setProduct( formProduct );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p>{ message }</p>
            <Modal.Footer>
                <Button variant="secondary" onClick={ handleCloseModal }>
                    Cerrar
                </Button>
                <Button type="submit" variant="primary">Guardar</Button>
            </Modal.Footer>
        </form>
    )
}

export default FormDelete;
