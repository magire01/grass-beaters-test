import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

const AddLocations = () => {

    const [displaySearch, setDisplaySearch] = useState(false)

    const style = {
        card: {
            width: "auto",
            padding: 10,
            margin: 10,
            backgroundColor: "lightgreen",
            height: 300
        },
        scheduleButton: {
            backgroundColor: "white",
            color: "green"
        }
    }

    const showLocationInput = () => {
            return (
                <>
                    <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                        <input />
                    </Grid> 
                    <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                        <Button>Search</Button>
                    </Grid> 
                </>
            )
    }

    return (
        <>
            <Grid item md={9} xs={9} style={{ textAlign: "left" }}>
                <p>Available Locations</p>
            </Grid> 
            <Grid item md={3} xs={3} style={{ textAlign: "right" }}>
                <Button onClick={() => setDisplaySearch(!displaySearch)}>Add</Button>
            </Grid>
            {
                displaySearch ? showLocationInput() : null
            }
            
        </>          
    );
}

export default AddLocations;