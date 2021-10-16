import React from 'react';
import { Table } from 'react-bootstrap';

import ItemVentas from './ItemVentas';

// Functional Component
const TablaVentas = ({ ventas, setVentas, deleteVenta, updateVenta }) => {

    console.log( ventas );

    return (
        <div>
            {   ! ventas
                    ?   <p>No hay ventas</p>
                    :   <Table className="table-ventas" bordered hover size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">N° Factura</th>
                                    <th scope="col">Cliente</th>
                                    <th scope="col">Descripción</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Fecha Pago</th>
                                    <th scope="col">Responsable</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   ventas.map( venta => (
                                    <ItemVentas
                                        key={ venta._id }
                                        venta={ venta }
                                        setVentas={ setVentas }
                                        deleteVenta={ deleteVenta }
                                        updateVenta={ updateVenta }
                                    />
                                ))}
                            </tbody>
                        </Table>
            }
        </div>
    )
}

export default TablaVentas;