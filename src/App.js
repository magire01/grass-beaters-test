import './App.css';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';

import Authed from './pages/Authed';
import UnAuthed from './pages/UnAuthed';
import Home from './pages/Home';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

import ContractorPage from './pages/ContractorPage';
import CustomerPage from './pages/CustomerPage';
import ServiceSearch from './pages/ServiceSearch';
/*

  App
    -NoAuth
      -Service Search (UnAuthed)
    -AuthCustomer
      -Service Search (Authed)
    -AuthContractor
      -Contractor UI
*/
const App = () => {
  const [page, setPage] = useState("home")

  const [isAuth, setIsAuth] = useState(true)

  // useEffect(() => {
  //   setIsAuth(true)
  // }, [])

  const CurrentPage = () => {
    switch (page) {
      case "signUp":
        return <SignUp />
      case "signIn":
        return <SignIn />
      case "home":
        return <Home auth={isAuth}/>
      default:
        return <p>error</p>
    }
  }

  const style = {
    button: {
      backgroundColor: "lightgreen",
      color: "white",
      fontWeight: "bold"
    },
    buttonActive: {
      backgroundColor: "white",
      color: "green",
      fontWeight: "bold"
    }
  }


  return (
   <>
    <AppBar style={{ backgroundColor: "lightgreen" }}>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Button onClick={() => setPage("signUp")}>SignUp</Button>
          <Button onClick={() => setPage("signIn")}>SignIn</Button>
          <Button onClick={() => setPage("home")}>Home</Button>
        </Grid>
        <Grid item md={12} xs={12}>
          <h2 style={{  textAlign: "center" }}>Grass Beaters</h2>
        </Grid>
      </Grid>
    </AppBar>

    <Container style={{ marginTop: 200 }}>
      <CurrentPage />
    </Container>
   </>
  );
}

export default App;
