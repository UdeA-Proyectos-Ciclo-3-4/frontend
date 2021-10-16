import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Functional Component

const ModalAddEdit = ({ title, type, component, stateModal, setStateModal }) => {


    const handleCloseModal = () => {
        console.log( 'Click handleCloseModal' );
        setStateModal( false );
    };


    const handleShowModal = () => {
        console.log( 'Click handleShowModal' );
        setStateModal( true );
    }

    return (
        <>
            <Button variant="primary" onClick={ handleShowModal }>
                { ( type === 'add' ) && <i className="fas fa-plus"></i> }
                { ( type === 'edit' ) && <i className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i> }
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

export default ModalAddEdit;

