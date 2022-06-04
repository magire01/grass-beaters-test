import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import customerAPI from "../utilities/customer.json"

import { API }  from 'aws-amplify';

const AuthCustomer = () => {
    let [customer, setCustomer] = useState({
        name: "",
        aboutMe: "",
        availableLocations: [""],
        availableServices: [""]
    });

    // const getCustomer = async () => {
    //     API
    //         .get("getCustomer", "/api/{custId}")
    //         .then(print())
    // }

    useEffect(() => {
        setCustomer(customerAPI.data[0])
    }, [])

    const style = {
        card: {
            width: "auto",
            padding: 10,
            margin: 10,
            backgroundColor: "lightgreen"
        }
    }

    return (
        <>
            <Card style={style.card}>
                <Grid container>
                    <Grid item md={12}>
                        <h5>{customer.name}</h5>
                    </Grid>
                </Grid>
            </Card>
            <Card style={style.card}>
                <Grid container>
                    <Grid item md={12}>
                        <p>{customer.address}</p>
                        <p>{customer.city}, {customer.state} {customer.zip}</p>
                    </Grid>
                </Grid>          
            </Card>
            <Card style={style.card}>
                 <Grid container>
                    <Grid item md={12}>
                        <p>{customer.lawnAcres} acres</p>
                    </Grid>
                </Grid>
            </Card>
        </> 
    );
}

export default AuthCustomer;
