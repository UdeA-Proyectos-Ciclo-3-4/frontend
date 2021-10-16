import React, { useState } from 'react';
import { Modal, Button , } from 'react-bootstrap';

import { initialStateVendedores } from '../../../data/vendedores';

// Functional Component
const FormAddEdit = ({ type, vendedor, setStateModal, updateVendedor, addNewVendedor }) => {

    // State Component
    const [ formVendedor, setFormVendedor ] = useState( vendedor );

    const { nombre, especialidad, celular } = formVendedor;

    const handleCloseModal = () => {
        console.log( 'Click handleCloseModal' );
        setStateModal( false );
    }

    const handleChange = event => {
        setFormVendedor({
            ...formVendedor,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit Add/Edit', type );

        
        if( type === 'edit' ) {
            updateVendedor( formVendedor );
            setFormVendedor( initialStateVendedores );
        }
        if( type === 'add' ) {
            addNewVendedor( formVendedor );
            setFormVendedor( initialStateVendedores );
        }

        setStateModal( false );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombres</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej. Maria"
                    name="nombre"
                    value={ nombre }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">especialidad</label>
                <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Ej. joyero"
                name="especialidad"
                value={ especialidad }
                onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Celular</label>
                <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej: 313009090"
                    name="celular"
                    value={ celular }
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