import React from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { setProductByName } from '../../redux/actions/ProductsOperations';
import { logout } from '../../redux/actions/AuthUser';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SportsBasketball from "@material-ui/icons/SportsBasketball";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import cartImage from "../../images/iconobasket.jpg";
import Person from "@material-ui/icons/PersonOutline";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import "./Header.css";



class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      anchorEl: null,
      login: false
    }
  }

  render() {
    let { anchorEl } = this.state;

    return (
      <AppBar
        position="static"
        style={{ backgroundColor: "#F07F01", padding: 10 }}
      >
        <Toolbar>
          <div className="left-part">
            <IconButton
              onClick={() => {
                this.props.history.push("/");
              }}
            > <SportsBasketball size="medium" />
            </IconButton>
            <img src={cartImage} alt={"LogoTienda"} style={{ marginLeft: 10 }} />
            <TextField
              label=" 🔍Buscar productos"
              value={this.state.searchTerm}
              onChange={e => {
                this.setState({ searchTerm: e.target.value });
              }}
              style={{ marginLeft: 100, width: 250, marginBottom: 15 }}
            />

            <Button
              style={{ marginLeft: 20, color: "#F07F01" }}
              variant="contained"
              onClick={() => {
                this.props.setProductByName(this.state.searchTerm)
              }}
            > Buscar</Button>
          </div>

          <div className="right-part">
            {this.props.token === ""
              ?
              <Button
                variant="contained"
                style={{ marginRight: 20, color: "#F07F01" }}
                onClick={() => {
                  this.props.history.push("/login");
                }}
              >
                Log in
              </Button>

              :
              <div>
                <Avatar
                  onClick={event => {
                    this.setState({ anchorEl: event.currentTarget });
                  }}
                  style={{ backgroundColor: " #d9d9d9", height: 50, width: 50, marginRight: 20 }}
                >
                  <Person
                    style={{ backgroundColor: "F07F01" }} />
                </Avatar>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => {
                    this.setState({ anchorEl: null });
                  }}
                >
                  <MenuItem
                    onClick={() => {
                      this.setState({ anchorEl: null });
                      this.props.history.push("/order");
                    }}
                  >Ultimo Pedido
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.setState({ anchorEl: null });
                      this.props.history.push("/allpurchases");
                    }}
                  >Mis Pedidos
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      this.props.logout();
                      this.props.history.push("/");
                      this.setState({ anchorEl: null });

                    }}
                  >Logout
                  </MenuItem>
                </Menu>
              </div>
            }
          </div>

        </Toolbar>
      </AppBar>

    )

  }
}

const mapStateToProps = state => ({
  products: state.products.products,
  token: state.token.token,
  user: state.user.user,

})


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  setProductByName: (name) => dispatch(setProductByName(name))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Header));