import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

import { setProductById, setRelatedItems } from '../../redux/actions/ProductsOperations';
import { purchase } from '../../redux/actions/AuthUser';

import Button from "@material-ui/core/Button";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import ImageSearchIcon from '@material-ui/icons/ImageSearch';

class DetailsItem extends React.Component {

    constructor(props) {
        super(props)
        this.id = this.props.match.params.id;
    }

    componentDidMount() {
        this.props.setProductById(this.id)
    }


    render() {
        if (this.props.oneproduct && !this.props.relateditems) {
            this.props.setRelatedItems(this.props.oneproduct.category, this.props.match.params.id)
        }
        return (
            <div style={{ padding: 10 }}>
                {this.props.oneproduct &&
                    <div key={this.props.oneproduct.id}>
                        <div key={this.props.oneproduct.id}
                            style={{
                                marginBottom: 20,
                                marginTop: 10,
                                fontSize: 32,
                                fontFamily: "Arial",
                                marginLeft: 50,
                            }}
                        >
                            {this.props.oneproduct.name}
                        </div>
                        <div style={{ display: "flex" }}>
                            <img src={this.props.oneproduct.image} alt="" width={250} height={250} style={{ borderRadius: "5%", objectFit: "cover", marginLeft: 50, }} />
                            <div
                                style={{
                                    flex: 1,
                                    marginLeft: 20,
                                    display: "flex",
                                    flexDirection: "column",
                                    //marginLeft: 50,
                                }}
                            >
                                <div
                                    style={{
                                        fontSize: 18, marginTop: 10, fontFamily: "Arial"
                                    }}>
                                    Precio: {this.props.oneproduct.price} €
                                </div>
                                {this.props.oneproduct.popular === 1 && (
                                    <span style={{ marginTop: 5, fontSize: 14, color: "#228B22" }}>
                                        (Producto más vendido)
                                    </span>
                                )}
                                <TextField
                                    type="number"
                                    value={1}
                                    style={{ marginTop: 20, marginBottom: 20, width: 50, fontFamily: "Arial" }}
                                    label="Cantidad"
                                />
                                <Button
                                    style={{ width: 200, marginTop: 5 }}
                                    color="primary"
                                    variant="outlined"
                                    onClick={async () => {
                                        if (this.props.token === "") {
                                            this.props.history.push("/login/")
                                        } else {
                                            await this.props.purchase(this.props.id, this.props.oneproduct.id)
                                            this.props.history.push("/order/");
                                        }
                                    }
                                    }
                                >
                                    Comprar <AddShoppingCartIcon style={{ marginLeft: 5 }} />
                                </Button>

                            </div>
                        </div>
                        <div
                            style={{
                                marginTop: 30,
                                marginBottom: 20,
                                fontSize: 24,
                                fontFamily: "Arial",
                                marginLeft: 50
                            }}
                        >Descripción del producto:
                        </div>
                        <div
                            style={{
                                marginLeft: 75,
                                marginRight: 500,
                                maxHeight: 200,
                                fontSize: 13,
                                overflow: "auto",
                                textAlign: "justify",
                                fontFamily: "Arial"
                            }}
                        >
                            {this.props.oneproduct.description ? this.props.oneproduct.description : <div style={{ color: "gray" }}>No disponible</div>}
                        </div>
                    </div>
                }
                {/* Relateditems */}
                <div
                    style={{
                        marginTop: 30,
                        marginBottom: 10,
                        fontSize: 24,
                        fontFamily: "Arial",
                        marginLeft: 50,
                    }}

                >
                    Productos similares:
                </div>
                <div>
                    {this.props.relateditems && this.props.relateditems.slice(0, 3).map((item, key) => (

                        <Card key={item.name}
                            style={{ width: 200, height: 270, margin: 10, display: "inline-block", marginLeft: 50 }}
                        >
                            <CardActionArea
                                onClick={() => {
                                    this.props.setProductById(item.id)
                                    this.props.history.push("/details/" + item.id);
                                }}
                            >
                                <CardMedia
                                    style={{ height: 140 }}
                                    image={item.image}
                                />
                                <CardContent style={{ height: 50 }}>
                                    <div
                                        style={{
                                            marginLeft: 5,
                                            fontWeight: "bold",
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}
                                    >
                                        {item.name}
                                    </div>
                                    <div style={{ margin: 5 }}>Precio: {item.price} €</div>
                                    <div style={{ color: "#1a9349", fontWeight: "bold", margin: 5 }}>
                                        {item.popular === 1 && "Más vendidos"}
                                    </div>
                                </CardContent>
                            </CardActionArea>
                            <CardActions
                                style={{ display: "flex", alignItems: "center", height: 45 }}
                            >
                                <Button
                                    size="small"
                                    style={{ marginRight: 60 }}
                                    onClick={() => {
                                        this.props.setProductById(item.id)
                                        this.props.history.push("/details/" + item.id);
                                    }}
                                >DETALLES
                            </Button>
                                <Tooltip title="Descripción Producto">
                                    <IconButton
                                        size="small"
                                        onClick={e => {
                                            this.props.setProductById(item.id)
                                            this.props.history.push("/details/" + item.id);
                                        }}
                                        color="primary"
                                    >
                                        <ImageSearchIcon size="small" />
                                    </IconButton>
                                </Tooltip>
                            </CardActions>
                        </Card>
                    ))}

                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.token.token,
    id: state.id.id,
    purchase: state.purchase.purchase,
    relateditems: state.oneproduct.relateditems,
    oneproduct: state.oneproduct.oneproduct,
})

const mapDispatchToProps = dispatch => ({
    setRelatedItems: (category, id) => dispatch(setRelatedItems(category, id)),
    purchase: (userid, productid) => dispatch(purchase(userid, productid)),
    setProductById: (id) => dispatch(setProductById(id)),
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailsItem));