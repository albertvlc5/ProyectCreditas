import React from 'react';
import { withRouter } from "react-router-dom";
import './Info.css';
import iconobasket from "../../images/fotoinfo.jpg";


class Info extends React.Component {
    
    render() {

        return (
        <div className="Info"> 
            <div
                style={{
                    marginBottom: 20,
                    marginTop: 10,
                    fontSize: 24
                }}
            >
            <b> TREBLA SPORTS </b>
            </div>
            <div
                style={{
                    marginBottom: 20,
                    marginTop: 10,
                    fontSize: 18
                }}
            >
            Tu tienda de articulos deportivos de confianza.
            </div>
            <div
                style={{
                    marginBottom: 20,
                    marginTop: 10,
                    fontSize: 18
                }}
            >
            Entra y navega por nuestra aplicación descubriendo las nuevas tendencias del mundo deportivo.
            </div>
            <div
                style={{
                    marginBottom: 20,
                    marginTop: 10,
                    fontSize: 18
                }}
            >
            Disfrute de la mejor calidad y precio, las mejores marcas deportivas, zapatillas, chandals, camisetas, material deportivo, y todo lo que desee en TREBLA SPORTS.
            </div>
            <img src={iconobasket} alt="Logo" height="250" width="250"/>
        </div>
        )
    }
}

export default withRouter((Info));