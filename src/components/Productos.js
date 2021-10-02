import React from 'react'
import Menu from "./Menu";

const Productos = () => {
    return (
        <>
            <div className="container mb-5 pb-5 mt-5 pt-5">
                <div className="row">
                    <div className="col col-md-3">

                        <Menu />

                    </div>
                    <div className="col col-md-9">

                        <p> Espacio para el componente de Productos</p>

                    </div>
                </div>
            </div>  
        </>
    )
}

export default Productos
