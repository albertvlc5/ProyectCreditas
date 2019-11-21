import React from 'react';
import { withRouter } from "react-router-dom";
import './Delivery.css';

class Delivery extends React.Component {
    render() {
        return (
            <div className="Delivery">
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 24
                    }}
                >
                <b> Opciones de envío: </b>
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                1.Envío estándar
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                2.Envío exprés
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                3.Entrega hoy 
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                4. Envío económico
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                5.Puntos de recogida
                </div>
            </div>
        )
    }
}

export default withRouter((Delivery));