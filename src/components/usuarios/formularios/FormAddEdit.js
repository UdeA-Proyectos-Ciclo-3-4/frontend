import React, { useState } from 'react';
import { Modal, Button , Form} from 'react-bootstrap';

import { initialStateUsuarios } from '../../../data/usuarios';

// Functional Component
const FormAddEdit = ({ type, usuario, setStateModal, updateUsuario }) => {

    // State Component
    const [ formUsuario, setFormUsuario ] = useState( usuario );

    const { nombre, rol, correo, contrasena } = formUsuario;

    const handleCloseModal = () => {
        console.log( 'Click handleCloseModal' );
        setStateModal( false );
    }

    const handleChange = event => {
        setFormUsuario({
            ...formUsuario,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit Add/Edit', type );

        
        if( type === 'edit' ) {
            updateUsuario( formUsuario );
            
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej. Tennis"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Rol</label>
                <Form.Select name = "rol" as="select" onChange={handleChange} aria-label="Default select example">
                    <option>Seleccione...</option>
                    <option value="administrador">administrador</option>
                    <option value="vendedor">vendedor</option>
                    <option value="comprador">comprador</option>
                </Form.Select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Correo</label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej: miguel@correo.co"
                    name="correo"
                    value={ correo }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Contraseña</label>
                <input
                    type="password"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="*****"
                    name="contrasena"
                    value={ contrasena }
                    onChange={ handleChange }
                />
            </div>

            <Modal.Footer>
                <Button variant="secondary" onClick={ handleCloseModal }>
                    Cerrar
                </Button>
                <Button type="submit" variant="primary">Guardar</Button>
            </Modal.Footer>

        </form>
    )
}

export default FormAddEdit;