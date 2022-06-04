import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import searchResultsAPI from "../utilities/searchResults.json"
import CustomerAddress from "./CustomerAddress";

const ServiceSearch = (props) => {
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
        <>
            <CustomerAddress />

            <Card style={style.card}>
                <p>Results</p>
                {searchResults.map((searchResults, index) => (
                    <Grid container key={index}>
                        <Grid item xs={8}>
                            <p>{searchResults.name}</p>
                        </Grid>
                        <Grid item xs={4}>
                            <Button style={style.scheduleButton}>Profile</Button>
                        </Grid>
                    </Grid>
                ))}
            </Card>
            </>         
    );
}

export default ServiceSearch;