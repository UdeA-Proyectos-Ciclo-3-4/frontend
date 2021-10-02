import React from 'react'
import { ListGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action >
                <Link to={"/ventas"}>
                    <i class="fas fa-cash-register"></i>
                    Ventas
                </Link>
            </ListGroup.Item>
            <ListGroup.Item action >
                <Link to={"/usuarios"}>
                    <i class="fas fa-users"></i> 
                    Usuarios
                </Link>
            </ListGroup.Item>
            <ListGroup.Item action >
                <Link to={"/productos"}>
                    <i class="fab fa-product-hunt"></i> 
                    Productos
                </Link>
            </ListGroup.Item>
            <ListGroup.Item action >
                <Link to={"/vendedores"}>
                    <i class="fas fa-user-tag"></i> 
                    Vendedores
                </Link>
            </ListGroup.Item>
        </ListGroup>

                
    )
}

export default Menu
