import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";


const SignIn = () => {

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

    return (
            <>

                <Grid container>
                    <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                        <p>Username</p>
                        <input />
                        <p>Password</p>
                        <input />
                    </Grid>

                    <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                        <Button>Enter</Button>
                    </Grid>
                </Grid>         
             </>         
    );
}

export default SignIn;