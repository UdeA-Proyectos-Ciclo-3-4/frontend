import React from 'react';
import { Button } from 'react-bootstrap';

const DeleteProduct = () => {

    const handleShowDelete = () => {
        console.log( 'Click Delete' );
    }

    return (
        <>
            { /*Component Button (Delete) react-bootstrap */ }
            <Button variant="primary" onClick={ handleShowDelete }>
                <i
                    className="fas fa-trash-alt"
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                ></i>
            </Button>
        </>
    )
}

export default DeleteProduct;
