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
        <div class="mt-5 container-fluid">
            <h3 class="row justify-content-center">Recupera tu contraseña</h3>
            <h5 class="row justify-content-center">Ingresa tu correo electrónico</h5>
            <div class="mt-5 container-fluid col col-md-4">
                <div class="m-auto row justify-content-center align-items-center">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1 " class="form-label">Correo electronico</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="correo@ejemplo.com"
                        />
                    </div>
                    <Button
                        variant="secondary"
                        class="btn btn-outline-secondary"
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
