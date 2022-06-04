import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import contractorAPI from "../utilities/contractor.json"

const AuthContractor = (props) => {
    let [contractor, setContractor] = useState({
        name: "",
        aboutMe: "",
        availableLocations: [""],
        availableServices: [""]
    });

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
                        <h5>{contractor.name}</h5>
                        <p>{contractor.aboutMe}</p>
                    </Grid>
                </Grid>         
            </Card>
            <Card style={style.card}>
                <Grid container>
                    <Grid item md={12}>
                        <h5>Available Locations</h5>
                        {contractor.availableLocations.map((location, index) => (
                        <p key={index}>{location.city}</p>
                        ))}
                    </Grid>
                </Grid>  
            </Card>
            <Card style={style.card}>
                <Grid container>
                    <Grid item md={12}>
                        <h5>Services</h5>
                        {contractor.availableServices.map((service, index) => (
                            <p key={index}>{service.serviceType}</p>
                        ))}
                    </Grid>
                </Grid>  
            </Card>
        </>
    );
}

export default AuthContractor;
