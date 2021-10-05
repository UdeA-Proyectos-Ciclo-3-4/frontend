import React from 'react';

import { Button } from 'react-bootstrap';

// Functional Component
const EditProduct = () => {

    const handleShowEdit = () => {
        console.log( 'Click Edit' );
    }

    return (
        <>
            { /*Component Button (Edit) react-bootstrap */ }
            <Button variant="primary" onClick={ handleShowEdit }>
                <i
                    className="fas fa-edit"
                    data-bs-toggle="modal"
                    data-bs-target="#editModal"
                ></i>
            </Button>
        </>
    )
}

export default EditProduct;
