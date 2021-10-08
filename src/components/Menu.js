import React from 'react'
import { ListGroup } from 'react-bootstrap';
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        
        <ListGroup defaultActiveKey="#link1">
            <ListGroup.Item action >
                <Link to={"/ventas"}>
                    <i className="fas fa-cash-register"></i>
                    Ventas
                </Link>
            </ListGroup.Item>
            <ListGroup.Item action >
                <Link to={"/usuarios"}>
                    <i className="fas fa-users"></i> 
                    Usuarios
                </Link>
            </ListGroup.Item>
            <ListGroup.Item action >
                <Link to={"/productos"}>
                    <i className="fab fa-product-hunt"></i> 
                    Productos
                </Link>
            </ListGroup.Item>
            <ListGroup.Item action >
                <Link to={"/vendedores"}>
                    <i className="fas fa-user-tag"></i> 
                    Vendedores
                </Link>
            </ListGroup.Item>
        </ListGroup>

                
    )
}

export default Menu
