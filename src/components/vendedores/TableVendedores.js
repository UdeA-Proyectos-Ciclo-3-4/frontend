import React from 'react';
import { Table } from 'react-bootstrap';

import ItemVendedor from './ItemVendedor';

// Functional Component
const TableVendedores = ({ vendedores, setVendedores, deleteVendedor, updateVendedor }) => {

    console.log( vendedores );

    return (
        <div>
            {   vendedores.length <= 0
                    ?   <p>No hay vendedores</p>
                    :   <Table className="table-vendedor" bordered hover size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Especialidad</th>
                                    <th scope="col">Celular</th>
                                    <th scope="col">Fecha ingreso</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   vendedores.map( vendedor => (
                                    <ItemVendedor
                                        key={ vendedor._id }
                                        vendedor={ vendedor }
                                        setVendedores={ setVendedores }
                                        deleteVendedor={ deleteVendedor }
                                        updateVendedor={ updateVendedor }
                                    />
                                ))}
                            </tbody>
                        </Table>
            }
        </div>
    )
}

export default TableVendedores;