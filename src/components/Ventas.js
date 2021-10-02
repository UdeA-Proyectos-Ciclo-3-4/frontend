import React from 'react'
import Menu from "./Menu";

const Ventas = () => {
    return (
        <>
            <div className="container mb-5 pb-5 mt-5 pt-5">
                <div className="row">
                    <div className="col col-md-3">

                        <Menu />

                    </div>
                    <div className="col col-md-9">

                        <p> <h2 class="center">Listado de ventas</h2>
                        
                            <table class="table">
                    <caption>
                        Listado de ventas activas 2021
                    </caption>
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Cliente</th>
                            <th scope="col">Descripcion</th>
                            <th scope="col">Total</th>
                            <th scope="col">Fecha Inicial</th>
                            <th scope="col">Fecha Pago</th>
                            <th scope="col">Responsable</th>
                            <th scope="col">Estado</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>

                            <td>Pepito Perez</td>
                            <td>Botas</td>
                            <td>$120000</td>
                            <td>2021-09-01</td>
                            <td>2021-09-05</td>
                            <td>Miguel</td>
                            <td>Creacion</td>
                            <td class="icons">
                                <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>

                            <td>Alexa Mendez</td>
                            <td>Zandalias</td>
                            <td>$80000</td>
                            <td>2021-10-03</td>
                            <td>2021-10-03</td>
                            <td>Luisa</td>
                            <td>Embalaje</td>

                            <td class="icons">
                                <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>

                            <td>Nestor Ramos</td>
                            <td>Guantes</td>
                            <td>$45000</td>
                            <td>2021-10-09</td>
                            <td>2021-10-09</td>
                            <td>Alba</td>
                            <td>Despacho</td>
                            <td class="icons">
                                <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>4</td>

                            <td>Diego Prieto</td>
                            <td>Bolso</td>
                            <td>$80000</td>
                            <td>2021-07-07</td>
                            <td>2021-07-07</td>
                            <td>Caro</td>
                            <td>Ruta</td>
                            <td class="icons">
                                <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                            </td>
                        </tr>
                        <tr>
                            <td>5</td>

                            <td>Daniel Santos</td>
                            <td>Cinturon</td>
                            <td>$25000</td>
                            <td>2021-04-15</td>
                            <td>2021-06-06</td>
                            <td>Juan</td>
                            <td>Recepcion</td>
                            <td class="icons">
                                <i class="fas fa-edit" data-bs-toggle="modal" data-bs-target="#editModal"></i>
                                <i class="fas fa-trash-alt" data-bs-toggle="modal" data-bs-target="#deleteModal"></i>
                            </td>
                        </tr>
                    </tbody>
                </table></p>

                    </div>
                </div>
            </div>  
        </>
    )
}

export default Ventas
