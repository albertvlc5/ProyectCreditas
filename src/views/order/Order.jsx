import React from 'react';
import { dimeuser, dimetoken, dimeid, dimeultimo } from '../../redux/actions/AuthUser';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import './Order.css';

class Order extends React.Component {

    componentDidMount() {
        this.props.dimeultimo(this.props.id)
    }

    render() {

        return (

            <div className="Order">
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 38,
                        fontFamily: "Arial"
                    }}
                >
                    Enhorabuena  {this.props.user}

                </div>
                <div
                    style={{
                        marginBottom: 20,
                        marginTop: 10,
                        fontSize: 24
                    }}
                >
                    Disfruta de su nuevo producto !
                        </div>

                {this.props.lastpurchase && this.props.lastpurchase.map((item, key) => (
                    <Grid container direction="row" justify="center" alignItems="flex-start" key={item.id}>

                        <Grid container item xs={12} direction="row" justify="center" alignItems="flex-start">
                            <CardMedia
                                style={{ height: 250, width: 250 }}
                                image={item.product.image}
                            />
                        </Grid>

                        <div
                            style={{
                                marginBottom: 20,
                                marginTop: 10,
                                fontSize: 24
                            }}
                        >
                            {item.product.name} -
                        <b>{item.product.price} €   </b>
                        </div>
                        <div
                            style={{
                                marginLeft: 50,
                                marginRight: 50,
                                maxHeight: 200,
                                fontSize: 13,
                                overflow: "auto",
                                textAlign: "justify"
                            }}
                        >
                            {item.product.description ? item.product.description : <div style={{ color: "gray" }}>No disponible</div>}
                        </div>
                    </Grid>
                ))}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    token: state.token.token,
    id: state.id.id,
    lastpurchase: state.lastpurchase.lastpurchase,

})


const mapDispatchToProps = dispatch => ({
    dimeultimo: (id) => dispatch(dimeultimo(id)),
    dimeuser: (aux) => dispatch(dimeuser(aux)),
    dimetoken: (aux) => dispatch(dimetoken(aux)),
    dimeid: (password, username) => dispatch(dimeid(password, username))

})


export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Order));