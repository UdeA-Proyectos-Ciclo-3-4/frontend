import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import products from '../../../data/products';

// Functional Component
const FormDelete = ({ message, setStateModal, product, deleteProduct }) => {

    const handleCloseModal = () => {
        console.log( 'handleClose Modal' );
        setStateModal( false );
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit Delete', product );
        deleteProduct( product );
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
