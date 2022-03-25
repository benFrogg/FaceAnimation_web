import React, { useState } from "react";
import "./LoginPage.css";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Home";

function LoginPage({ Login, error }) {
  const [details, setDetails] = useState({ username: "", password: "" });

  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    Login(details);
  };

  return (
    <>
      {isLoggedIn ? (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      ) : (
        <Grid>
          <Paper className="paperStyle" elevation={10}>
            <h2>
              Face Mover&nbsp;&nbsp;
              <i className="fas fa-code-branch fas-fade"></i>
            </h2>
            <Grid className="introSign" align="center">
              <Avatar id="loginLogo">
                <VpnKeyOutlinedIcon />
              </Avatar>
              <h3 className="space">Sign in</h3>
            </Grid>
            <form onSubmit={handleSubmit}>
              {error !== "" ? (
                <div
                  className="error"
                  style={{
                    textAlign: "center",
                    color: "red",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  {error}
                </div>
              ) : (
                ""
              )}
              <TextField
                id="userField"
                label="Username"
                name="username"
                placeholder="Enter your username"
                variant="standard"
                onChange={(e) =>
                  setDetails({ ...details, username: e.target.value })
                }
                value={details.username}
                fullWidth
                required
              />
              <TextField
                id="passwordField"
                label="Password"
                name="password"
                placeholder="Enter your password"
                variant="standard"
                type="password"
                onChange={(e) =>
                  setDetails({ ...details, password: e.target.value })
                }
                value={details.password}
                fullWidth
                required
              />
              {/*<FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                /> 
              }
            label="Remember me"/>*/}
              <Button
                id="submitButton"
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
              >
                Sign In
              </Button>
            </form>
          </Paper>
        </Grid>
      )}
    </>
  );
}

export default LoginPage;
