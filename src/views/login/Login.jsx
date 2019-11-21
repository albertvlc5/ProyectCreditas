import React from "react";
import { withRouter,Link } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { postUser, dimetoken, dimeuser, dimeid } from '../../redux/actions/AuthUser';

class Login extends React.Component {
  state = {
    username: "",
    password: "",
    redirectToReferrer: false,
    result: null,
    wrongCred: false,
  };

  // componentDidMount() {
  //   this.props.dimetoken()
  //   console.log("Soy antes"+this.props.token + "eh")
  // }

  render() {
    //const { from } = this.props.history.state || { from: { pathname: "/" } };
    // if (this.state.redirectToReferrer === true) {
    //   this.setState({ redirectToReferrer: false })
    //   this.props.history.push("/");

    // }

    return (

      <div style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
      }}>
        <div
          style={{
            height: 300,
            width: 200,
            padding: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column"
          }}
        >
          <Avatar style={{ marginBottom: 10 }}>
            <LockOutlinedIcon />
          </Avatar>
          <div
            style={{
              marginBottom: 20,
              fontSize: 24,
              textAlign: "center"
            }}
          >
            {" "}
            Log in
            {" "}
          </div>
          <TextField
            value={this.state.username}
            placeholder="User name"
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
          <TextField
            value={this.state.password}
            type="password"
            placeholder="Password"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
          <Button
            style={{ marginTop: 20, width: 200 }}
            variant="outlined"
            color="primary"

            onClick={async () => {
              try {
                let result = await postUser(this.state.username, this.state.password)
                if (result) {
                  this.props.history.goBack();
                  this.props.dimeuser(this.state.username)
                  this.props.dimetoken(result.data)
                  this.props.dimeid(this.state.username, this.state.password)

                }
                else {
                  this.setState({ wrongCred: true })
                }
              } catch (error) {
                //console.log(error)
              }

            }}

          >
            Log in
          </Button>
          {this.state.wrongCred && (
            <div style={{ color: "red" }}>Usuario o contraseña incorrectos</div>
          )}
        <br></br>
        <Link to="/register/" style={{color: 'blue'}}>Registrarse</Link>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.token.token,
  user: state.user.user,
  id: state.id.id
})


const mapDispatchToProps = dispatch => ({
  dimetoken: (aux) => dispatch(dimetoken(aux)),
  dimeuser: (aux) => dispatch(dimeuser(aux)),
  dimeid: (password, username) => dispatch(dimeid(password, username))
})


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));