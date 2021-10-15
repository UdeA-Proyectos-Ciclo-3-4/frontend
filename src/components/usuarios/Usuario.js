import React, { useState, useEffect } from 'react';

// Components
import Menu from '../Menu';
import TableUsuarios from './TableUsuarios';
import NavbarUsuario from './NavbarUsuario';

// Static Data
import {initialStateUsuarios} from '../../data/usuarios';

const apiUrl = "http://localhost:5000/api/usuarios";

// Functional Component
const Usuario = () => {

    // State Component
    const [ usuarios, setUsuarios ] = useState( [] );   // Destructuring
    
    // ! (1) Peticion a la API para obtener todos los registros
    const getUsuariosfromAPI = async()=>{
        /** Consulta la data de productos a la API */
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        
        /** Obtiene la data */
        let data = await response.json();
        console.log( data );

        return data;
    }

    // ! (1) Peticion a la API para crear un nuevo registro
    const addUsuarioAPI = async( newUsuario ) => {
        /** Consulta para registrar data de productos en la API */
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( newUsuario )
        });

        /** Obtiene la data */
        let data = await response.json();
        console.log( data );

        return data;
    }

    const updateUsuarioAPI = async ( usuarioToUpdate ) => {
        /** Consulta para actualizar data de usuarios en la API */
        const response = await fetch( `${ apiUrl }/${ usuarioToUpdate._id }`, {
            method: 'PUT'                                                               ,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( usuarioToUpdate )
        });

        /** Obtiene la data */
        const data = await response.json();
        console.log( data );

        return data;
    }

    // ! (1) Peticion a la API para actualizar un registro
    const deleteUsuarioAPI = async ( usuarioToUpdate ) => {
        /** Consulta para actualizar data de usuarios en la API */
        const response = await fetch( `${ apiUrl }/${ usuarioToUpdate._id }`, {
            method: 'DELETE'                                                               ,
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify( usuarioToUpdate )
        });

        /** Obtiene la data */
        const data = await response.json();
        console.log( data );

        return data;
    }


    useEffect(() => {
        const getAllProducts = async () => {
            const data = await getUsuariosfromAPI();
            console.log( 'GET', data );

            /** Verifica si se obtubieron los datos existosamente */
            if( data.registra){ 
                console.log(data);
                setUsuarios( data.usuarios );
            }else{
                console.log(`Load static data`);
                setUsuarios( initialStateUsuarios);
            }
        }

        getAllProducts();

    }, []);

    const addNewUsuario = async ( newUsuario ) => {
        console.log( addNewUsuario );

        const data = await addUsuarioAPI( newUsuario );
        console.log('actulizo', data);

        setUsuarios([
            data.nuevoUsuario,
            ...usuarios            // Spread
        ]);
    }

    const updateUsuario = async ( usuarioToUpdate ) => {

        const data = await updateUsuarioAPI( usuarioToUpdate );

        const listaUsuarios = usuarios.filter(usuario =>(
            usuario[ '_id' ] !== usuarioToUpdate[ '_id' ]
        ));

        listaUsuarios.unshift(data.usuario)

        setUsuarios( listaUsuarios );

    }

    const deleteUsuario = async( usuarioToBeEliminated ) => {
        
        await deleteUsuarioAPI( usuarioToBeEliminated );

        setUsuarios( usuarios.filter( usuario => (
            usuario[ '_id' ] !== usuarioToBeEliminated[ '_id' ]
        )));
    }

    return (
        <div className="container mb-5 pb-5 mt-5 pt-5">
            <div className="row">
                <div className="col col-md-3">

                    <Menu />

                </div>
                <div className="col col-md-9">

                     <NavbarUsuario
                        title={ "Listado de usuarios" }
                        addNewUsuario={ addNewUsuario }
                    /> 
                    <TableUsuarios
                        usuarios={ usuarios }
                        setUsuarios={ setUsuarios }
                        deleteUsuario={ deleteUsuario }
                        updateUsuario={ updateUsuario }
                    />

                </div>
            </div>
        </div>
    )
};

export default Usuario;
