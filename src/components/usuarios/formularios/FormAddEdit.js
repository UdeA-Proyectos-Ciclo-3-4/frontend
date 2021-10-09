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
                <label htmlFor="exampleFormControlInput1" className="form-label">nombre</label>
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
                <label htmlFor="exampleFormControlInput1" className="form-label">rol</label>
                <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">administrador</option>
                    <option value="2">vendedor</option>
                    <option value="3">comprador</option>
                </Form.Select>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">correo</label>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="email"
                        name="correo"
                        id="flexRadioDefault1"
                        value={correo}
                        onChange={ handleChange }
                        
                    />
                    
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="password"
                        name="contrasena"
                        id="flexRadioDefault2"
                        value={contrasena}
                        onChange={ handleChange }
                        
                    />
                   
                </div>
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