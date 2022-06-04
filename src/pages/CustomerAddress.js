import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import searchResultsAPI from "../utilities/searchResults.json"

const CustomerAddress = (props) => {
    const [isAddressFound, setIsAddressFound] = useState(props.auth)
    const [searchResults, setSearchResults] = useState([
        {
            name: "",
            aboutMe: "",
            availableLocations: [""],
            availableServices: [""]
        }
    ]);

    useEffect(() => {
        setSearchResults(searchResultsAPI.data)
    }, [])

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
        <Card style={style.card}>
            <Grid container direction="row" alignItems="center">
                <Grid item xs={3}>
                    <h3>Address</h3>
                </Grid>
                <Grid item xs={9}>
                    {isAddressFound
                    ? <p>11385 Bigbone</p>
                    : <input style={{ width: "90%"}}/>}
                </Grid>
                <Grid item xs={2}>
                    <h3>City</h3>
                </Grid>
                <Grid item xs={6}>
                {isAddressFound
                    ? <p>Union</p>
                    : <input style={{ width: "70%"}}/>}
                </Grid>
                <Grid item xs={2}>
                    <h3>State</h3>
                </Grid>
                <Grid item xs={2}>
                    {isAddressFound
                    ? <p>KY</p>
                    : <input style={{ width: 50 }}/>}
                </Grid>
                <Grid item xs={12}>
                    {isAddressFound
                    ? null
                    : <Button onClick={() => setIsAddressFound(true)}>Search</Button>}
                </Grid>
            </Grid> 
        </Card> 
    )
}

export default CustomerAddress;