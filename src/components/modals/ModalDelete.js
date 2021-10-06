import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

// Functional Component
const ModalDelete = ({ title, component }) => {

    const [ showDelete, setShowDelete ] = useState(false);

    const handleCloseDelete = () => setShowDelete(false);
    const handleShowDelete = () => setShowDelete(true);

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
                show={ showDelete }
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

                <Modal.Footer>
                    <Button variant="secondary" onClick={ handleCloseDelete }>
                        Cerrar
                    </Button>
                    <Button variant="primary">Guardar</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalDelete;
