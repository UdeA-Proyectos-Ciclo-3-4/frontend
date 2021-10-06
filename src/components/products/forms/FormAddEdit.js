import React, { useState } from 'react';

// Functional Component
const FormAddEdit = ({ product, setProduct }) => {

    // State Component
    const [ formProduct, setFormProduct ] = useState( product );

    const { descripcion, valorUnitario, estado } = formProduct;

    const handleChange = event => {
        setFormProduct({
            ...formProduct,
            [ event.target.name ]: event.target.value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        setProduct( formProduct );
    }

    return (
        <form onSubmit={ handleSubmit }>
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
                <label htmlFor="exampleFormControlInput1" className="form-label">Valor unitario</label>
                <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Ej: 90"
                    name="valorUnitario"
                    value={ valorUnitario }
                    onChange={ handleChange }
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Estado</label>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="estado"
                        id="flexRadioDefault1"
                        value="disponible"
                        onChange={ handleChange }
                        checked={ estado === 'disponible' }
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Disponible
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="estado"
                        id="flexRadioDefault2"
                        value="no disponible"
                        onChange={ handleChange }
                        checked={ estado === 'no disponible' }
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                        No Disponible
                    </label>
                </div>
            </div>
        </form>
    )
}

export default FormAddEdit;
