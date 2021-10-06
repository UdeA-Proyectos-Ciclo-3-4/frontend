import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// Functional Component
const ModalAddEdit = ({ title, type, component }) => {

    // State Component
    const [ showAdd, setShowAdd ] = useState(false);

    const handleCloseAdd = () => {
        console.log( 'Click Close Add' );
        setShowAdd(false);
    };


    const handleShowAdd = () => {
        console.log( 'Click Show Add' );
        setShowAdd( true );
    }

    return (
        <>
            <Modal
                show={ showAdd }
                onHide={ handleCloseAdd }
                backdrop="static"
                keyboard={ false }
            >
                <Modal.Header closeButton>
                    <Modal.Title>{ title }</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    { component }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleCloseAdd }>
                        Cerrar
                    </Button>
                    <Button variant="primary">Guardar</Button>
                </Modal.Footer>
            </Modal>

            <Button variant="primary" onClick={ handleShowAdd }>
                { ( type === 'add' ) && <i className="fas fa-plus"></i> }
                { ( type === 'edit' ) && <i className="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i> }
            </Button>
        </>
    )
}

export default ModalAddEdit;
