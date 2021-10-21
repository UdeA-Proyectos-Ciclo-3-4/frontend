import React from 'react';
import { Table } from 'react-bootstrap';

import ItemUsuario from './ItemUsuario';

// Functional Component
const TableUsuarios = ({ usuarios, setUsuarios, deleteUsuario, updateUsuario }) => {

    console.log( usuarios );

    return (
        <div>
            {   usuarios.length <= 0
                    ?   <p>No hay usuarios</p>
                    :   <Table className="table-usuarios" bordered hover size="sm">
                            <thead className="table-dark">
                                <tr>
                                    <th scope="col">nombre</th>
                                    <th scope="col">rol</th>
                                    <th scope="col">correo</th>
                                    <th scope="col">&nbsp;</th>
                                </tr>
                            </thead>
                            <tbody>
                                {   usuarios.map( usuario => (
                                   
                                    <ItemUsuario 
                                        key={ usuario._id }
                                        usuario = { usuario }
                                        setUsuarios = { setUsuarios }
                                        deleteUsuario = { deleteUsuario }
                                        updateUsuario = { updateUsuario } 
                                    />
                                ))}
                            </tbody>
                        </Table>
            }
        </div>
    )
}

export default TableUsuarios;