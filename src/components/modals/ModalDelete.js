import React from 'react';
import { Modal, Button } from 'react-bootstrap';

// Functional Component
const ModalDelete = ({ title, component, stateModal, setStateModal }) => {

    const handleCloseDelete = () => {
        console.log( 'handleClose Modal' );
        setStateModal( false );
    }

    const handleShowDelete = () => {
        console.log( 'handleClose Modal' );
        setStateModal( true );
    }

    return (
        <>
            <Button variant="primary" onClick={ handleShowDelete }>
                <i
                    className="fas fa-trash-alt"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                ></i>
            </Button>

            <Modal
                show={ stateModal }
                onHide={ handleCloseDelete }
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
