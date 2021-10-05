import React from 'react';
import { Button } from 'react-bootstrap'

// Functional Component
const AddProduct = () => {

    const handleShowAdd = () => {
        console.log( 'Click Add' );
    }

    return (
        <>
            <Button variant="primary" onClick={ handleShowAdd }>
                <i className="fas fa-plus"></i>
            </Button>
        </>
    )
}

export default AddProduct
