import React from 'react';

import AddProduct from './AddProduct';

// Functional Component
const NavbarProduct = () => {
    return (
        <>
            <h2 className="center">Listado de productos</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        <AddProduct />

                    </ul>
                    <form className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Ej: Tennis para niña"
                            aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">
                            <i className="fas fa-search"></i>
                        </button>
                    </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavbarProduct;
