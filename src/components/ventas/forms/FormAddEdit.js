import React, { useState } from 'react';
import { Modal, Button , Form} from 'react-bootstrap';

//import { initialStateVentas } from '../../../data/ventas';

// Functional Component
const FormAddEdit = ({ type, Venta, setStateModal, updateVenta, addNewVenta }) => {

    // State Component
    const [ formVenta, setFormVenta ] = useState( Venta );

    const { N_Factura, cliente, Descripcion, Total, FechaInicial, FechaPago, Responsable, Estado } = formVenta;

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

        
        if( type === 'edit' ) {
            updateVenta( formVenta );
            
        }
        if( type === 'add' ) {
            addNewVenta( formVenta );
            
        }
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
                    name="N_Factura"
                    value={ N_Factura }
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
                    name="Descripcion"
                    value={ Descripcion }
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
                    name="Total"
                    value={ Total }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Fecha Inicial</label>
                <input
                    type="date"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej. 2021-09-01"
                    name="FechaInicial"
                    value={ FechaInicial }
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
                    name="FechaPago"
                    value={ FechaPago }
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
                    name="Responsable"
                    value={ Responsable }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Estado</label>
                <Form.Select name = "Estado"  value = {Estado } as="select" onChange={handleChange} aria-label="Default select example">
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