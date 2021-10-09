import React from 'react';
import { Table } from 'react-bootstrap';

//import ItemProducto from './ItemProduct';

// Functional Component
const TableUsuarios = ({ usuarios, setUsuarios, deleteUsuarios, updateUsuarios }) => {

    console.log( usuarios );

    return (
        <div>
            {   usuarios.length < 0
                    ?   <p>No hay usuarios</p>
                    :   <Table className="table-product" bordered hover size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">nombre</th>
                                    <th scope="col">rol</th>
                                    <th scope="col">correo</th>
                                    <th scope="col">contrasena</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   usuarios.map( usuario => (
                                    usuario.nombre
                                ))}
                            </tbody>
                        </Table>
            }
        </div>
    )
}

export default TableUsuarios;