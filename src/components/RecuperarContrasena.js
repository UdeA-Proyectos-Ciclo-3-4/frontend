import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

// Functional Component
const RecuperarContrasena = () => {

    const [ show, setShow ] = useState(false);
    const history = useHistory();

    const handleClose = () => {
        setShow(false)
        history.push('/auth/ingresar');
    };

    const handleShow = () => setShow(true);

    return (
        <div className="mt-5 container-fluid">
            <h3 className="row justify-content-center">Recupera tu contraseña</h3>
            <h5 className="row justify-content-center">Ingresa tu correo electrónico</h5>
            <div className="mt-5 container-fluid col col-md-4">
                <div className="m-auto row justify-content-center align-items-center">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1 " className="form-label">Correo electronico</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="correo@ejemplo.com"
                        />
                    </div>
                    <Button
                        variant="secondary"
                        className="btn btn-outline-secondary"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#confirModal"
                        onClick={ handleShow }
                    >Enviar</Button>
                </div>
            </div>

            <Modal show={ show } onHide={ handleClose }>
                <Modal.Header closeButton>
                    <Modal.Title>Contraseña Recuperada</Modal.Title>
                </Modal.Header>
                <Modal.Body>Se ha enviado un correo electronico con un enlace para que cambies tu contraseña</Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="secondary"
                        onClick={ handleClose }
                    >Cerrar</Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default RecuperarContrasena;
