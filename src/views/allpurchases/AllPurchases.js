import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import { dimeultimo, dimecompras } from '../../redux/actions/AuthUser';

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CardMedia from "@material-ui/core/CardMedia";


class AllPurchases extends Component {
  componentDidMount() {
    this.props.dimecompras(this.props.id)
  }
  render() {
    let totalPrice = this.props.allpurchases.reduce((accumulator, item) => {
      return accumulator + item.product.price;
    }, 0);

    return (

      <div style={{ padding: 10 }}>
        <div style={{ fontSize: 30, marginTop: 10 }}>
        Mis pedidos:
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Ref. Pedido</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell> </TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.allpurchases && this.props.allpurchases.map((item, key) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.product.name}</TableCell>
                <TableCell>
                  <CardMedia
                    style={{
                      height: 50, width: 50
                    }}
                    image={item.product.image}
                  />
                </TableCell>
                <TableCell>{item.product.price}€</TableCell>
                <TableCell>1</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div
          style={{
            color: "#504F5A",
            marginLeft: 5,
            marginTop: 50,
            fontSize: 22
          }}
        >
          <b>Gastos totales en pedidos:</b> {totalPrice} € 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lastpurchase: state.lastpurchase.lastpurchase,
  id: state.id.id,
  allpurchases: state.allpurchases.allpurchases,

})

const mapDispatchToProps = dispatch => ({
  dimeultimo: (id) => dispatch(dimeultimo(id)),
  dimecompras: (id) => dispatch(dimecompras(id))
})

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AllPurchases));