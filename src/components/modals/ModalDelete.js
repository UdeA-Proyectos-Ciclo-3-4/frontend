import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Functional Component
const ModalDelete = ({ title, component, stateModal, setStateModal }) => {

    const handleCloseModal = () => {
        console.log( 'Click handleCloseModal' );
        setStateModal( false );
    }

    const handleShowModal = () => {
        console.log( 'Click handleShowModal' );
        setStateModal( true );
    }

    return (
        <>
            <Button variant="primary" onClick={ handleShowModal }>
                <i
                    className="fas fa-trash-alt"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                ></i>
            </Button>

            <Modal
                show={ stateModal }
                onHide={ handleCloseModal }
                backdrop="static"
                keyboard={ false }
            >

                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    { component }
                </Modal.Body>

            </Modal>
        </>
    )
}


export default ModalDelete;

