import React, { useState } from 'react';
import { Modal, Button , Form} from 'react-bootstrap';

import { initialStateVentas } from '../../../data/ventas';

// Functional Component
const FormAddEdit = ({ type, venta, setVentas, setStateModal, updateVenta, addNewVenta }) =>{
// console.log(venta)
    // State Component
    const [ formVenta, setFormVenta ] = useState( venta );
    // console.log(formVenta)
    const { factura, cliente, descripcion, total, fechaPago, responsable, estado } = formVenta;

    const handleCloseModal = () => {
        console.log( 'Click handleCloseModal' );
        setStateModal( false );
    }

    const handleChange = event => {
        setFormVenta({
            ...formVenta,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log( 'handleSubmit Add/Edit', type );

        
        if( type === 'add' ) {

            addNewVenta(formVenta);
            
            setFormVenta(initialStateVentas);
        }
        if( type === 'edit' ) {
            updateVenta( formVenta );
            setFormVenta(initialStateVentas);
        }
        setStateModal( false );
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">N° Factura</label>
                <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej: 001"
                    name="factura"
                    value={ factura }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Cliente</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej. Luisa Matoma"
                    name="cliente"
                    value={ cliente }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Descripción</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej. Tennis"
                    name="descripcion"
                    value={ descripcion }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Total</label>
                <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej: $ 100.000"
                    name="total"
                    value={ total }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Fecha Pago	</label>
                <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej. 2021-09-01"
                    name="fechaPago"
                    value={ fechaPago }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Responsable</label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej. Luisa"
                    name="responsable"
                    value={ responsable }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Estado</label>
                <Form.Select name = "estado"  value = {estado } as="select" onChange={handleChange} aria-label="Default select example">
                    <option>Seleccione...</option>
                    <option value="Creacion" >Creacion</option>
                    <option value="Embalaje" >Embalaje</option>
                    <option value="Despacho">Despacho</option>
                    <option value="Ruta">Ruta</option>
                    <option value="Recepcion">Recepcion</option>
                </Form.Select>
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