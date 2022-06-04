import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

const CreateCustomer = () => {

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
                <Card style={style.card}>
                    <Grid container>
                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                            <p>First Name</p>
                            <input />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                            <p>Last Name</p>
                            <input />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                            <p>Address</p>
                            <input />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                            <p>City</p>
                            <input />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                            <p>State</p>
                            <input />
                        </Grid>
                        <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                            <p>Zip</p>
                            <input />
                        </Grid>
                    </Grid>
                </Card>         
            </>         
    );
}

export default CreateCustomer;