import './App.css';
import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import Button from "@mui/material/Button";
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';

import ContractorPage from './pages/ContractorPage';
import CustomerPage from './pages/CustomerPage';
import ServiceSearch from './pages/ServiceSearch';

const App = () => {
  const [page, setPage] = useState("signUp")

  const CurrentPage = () => {
    switch (page) {
      case "signUp":
        return <p>signUpPage</p>
      case "signIn":
        return <p>signInPage</p>
      case "customer":
        return <CustomerPage />
      case "contractor":
        return <ContractorPage />
      case "search":
        return <ServiceSearch />
      default:
        return <p>error</p>
    }
  }

  return (
   <>
    <AppBar style={{ backgroundColor: "lightgreen" }}>
      <Grid container>
        <Grid item md={12} xs={12}>
          <Button onClick={() => setPage("signUp")}>SignUp</Button>
          <Button onClick={() => setPage("signIn")}>SignIn</Button>
        </Grid>
        <Grid item md={12} xs={12}>
          <h1 style={{  textAlign: "center" }}>Grass Beaters</h1>
        </Grid>
        <Grid item md={12} xs={12}>
          <Button onClick={() => setPage("search")}>Search</Button>
          <Button onClick={() => setPage("customer")}>Customer</Button>
          <Button onClick={() => setPage("contractor")}>Contractor</Button>
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
