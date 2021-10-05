import React from 'react';
import { Table } from 'react-bootstrap';

import ItemProducto from './ItemProduct';

// Functional Component
const TableProducts = ({ products, setProducts }) => {

    console.log( products );

    return (
        <div>
            {   ! products
                    ?   <p>No hay productos</p>
                    :   <Table className="table-product" bordered hover size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Valor unitario</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Fecha ingreso</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   products.map( product => (
                                    <ItemProducto
                                        key={ product._id }
                                        product={ product }
                                        setProducts={ setProducts }
                                    />
                                ))}
                            </tbody>
                        </Table>
            }
        </div>
    )
}

export default TableProducts;
