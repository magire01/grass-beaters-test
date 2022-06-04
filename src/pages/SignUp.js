import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import CreateCustomer from "../components/CreateCustomer"
import CreateContractor from "../components/CreateContractor";

const SignUp = () => {

    const [userType, setUserType] = useState("none");

    const style = {
        card: {
            width: "auto",
            padding: 10,
            margin: 10,
            backgroundColor: "lightgreen"
        },
        scheduleButton: {
            backgroundColor: "white",
            color: "green"
        }
    }

    const displayUserFields = () => {
        if (userType == "customer") {
            return (
                <CreateCustomer />
            )
        } else if (userType == "contractor") {
            return (
                <CreateContractor />
            )
        } else {
            return (
                    <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                        <p>Create an Account</p>
                        <Button onClick={() => setUserType("customer")}>Customer</Button>
                        <Button onClick={() => setUserType("contractor")}>Contractor</Button> 
                    </Grid>
            )
        }
    }

    return (
            <>

                <Grid container>
                    <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                        {displayUserFields()}
                    </Grid>
                </Grid>         
             </>         
    );
}

export default SignUp;