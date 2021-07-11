import React from 'react';

import './viewsCSS/homeMenu.css'

const HomeMenu =({props})=> {
    return (
        <div className={'menu-view'}>
            <h1>Menú Principal</h1>

            <div className="button-section">

                <button>Generador de Facturas</button>
                <button>Revision Chía</button>
                <button>Revision Bogotá</button>
                <button>Revision Guarderías</button>




            </div>

        </div>
    );
}

export default HomeMenu;