import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { postRegister } from '../../redux/actions/AuthUser';

class Register extends React.Component {
  state = {
    username: "",
    password: "",
    email:"",
    result: null,
    wrongCred: false,
  };
  render() {
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
            Register
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
            value={this.state.email}
            placeholder="Email"
            onChange={e => {
              this.setState({ email: e.target.value });
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
                let result = await postRegister(this.state.username, this.state.password)
                if (result) {
                  this.props.history.goBack();
                }
                else {
                  this.setState({ wrongCred: true })
                }
              } catch (error) {
                //console.log(error)
              }

            }}

          >
            Register
          </Button>
          {this.state.wrongCred && (
            <div style={{ color: "red" }}>Nombre Usuario Existente !</div>
          )}
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  postRegister: (password, username) => dispatch(postRegister(password, username))
})


export default withRouter(connect(
  mapDispatchToProps
)(Register));