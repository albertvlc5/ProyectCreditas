import React from 'react';
import { withRouter } from "react-router-dom";
import './Payment.css';

class Payment extends React.Component {
    
    render() {

        return (
            <div className="Payment">
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 24
                    }}
                >
                <b> Formas de pago: </b>
                </div>
                
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                1.Tarjeta de crédito  
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                2.Contra-reembolso
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                3.Transferencia bancaria previo envío 
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                4.Paypal 
                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 18
                    }}
                >
                5.Giropay 
                </div>
            </div>
        )
    }
}

export default withRouter((Payment));