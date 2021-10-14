import React from 'react';
import { Table } from 'react-bootstrap';

import ItemVentas from './ItemVentas';

// Functional Component
const TablaVentas = ({ ventas, setVentas, deleteVentas, updateVentas }) => {

    console.log( ventas );

    return (
        <div>
            {   ! ventas
                    ?   <p>No hay ventas</p>
                    :   <Table className="table-ventas" bordered hover size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">N° Factura</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Fecha Inicial</th>
                                    <th scope="col">Fecha Pago</th>
                                    <th scope="col">Responsable</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   ventas.map( ventas => (
                                    <ItemVentas
                                        key={ ventas._id }
                                        ventas={ ventas }
                                        setVentas={ setVentas }
                                        deleteVentas={ deleteVentas }
                                        updateVentas={ updateVentas }
                                    />
                                ))}
                            </tbody>
                        </Table>
            }
        </div>
    )
}

export default TablaVentas;