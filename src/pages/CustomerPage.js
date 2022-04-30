import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import customerAPI from "../utilities/customer.json"

const CustomerPage = () => {
    let [customer, setCustomer] = useState({
        name: "",
        aboutMe: "",
        availableLocations: [""],
        availableServices: [""]
    });

    useEffect(() => {
        setCustomer(customerAPI.data[0])
    }, [])

    return (
        <Grid container>
            <Grid item md={12}>
                <Card>
                    <h5>{customer.name}</h5>
                </Card>
                <Card>
                    <p>{customer.address}</p>
                    <p>{customer.city}, {customer.state} {customer.zip}</p>
                </Card>
                <Card>
                    <p>{customer.lawnAcres} acres</p>
                </Card>
            </Grid>
        </Grid>
    );
}

export default CustomerPage;
