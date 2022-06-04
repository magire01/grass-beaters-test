import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";
import AddLocations from "./AddLocations";
import AddServices from "./AddServices";

const CreateContractor = () => {

    const [formPage, setFormPage] = useState(0)

    const handleNext = (type) => {
        if (type == "next") {
            setFormPage(formPage + 1)
        } else if (type == "previous") {
            if (formPage == 0) {
                console.log("Cant Go Back")
            } else {
                setFormPage(formPage - 1)
            }
            
        }
    }

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

    const displayForm = (value) => {
        switch (value) {
            case 0: 
                return (
                    <>
                        <Grid item md={3} xs={3} style={{ textAlign: "left" }}>
                            <p>Email</p>
                        </Grid>
                        <Grid item md={9} xs={9} style={{ textAlign: "center" }}>
                            <input />
                        </Grid>
                        <Grid item md={3} xs={3} style={{ textAlign: "left" }}>
                            <p>Password</p>
                        </Grid>
                        <Grid item md={9} xs={9} style={{ textAlign: "center" }}>
                            <input />
                        </Grid>
                        <Grid item md={3} xs={3} style={{ textAlign: "left" }}>
                            <p>Confirm Password</p>
                        </Grid>
                        <Grid item md={9} xs={9} style={{ textAlign: "center" }}>
                            <input />
                        </Grid>
                    </>
                )
            case 1:
                return (
                    <>
                        <Grid item md={3} xs={3} style={{ textAlign: "center" }}>
                            <p>First Name</p>
                        </Grid>
                        <Grid item md={9} xs={9} style={{ textAlign: "center" }}>
                            <input />
                        </Grid>
                        <Grid item md={3} xs={3} style={{ textAlign: "center" }}>
                            <p>Last Name</p>
                        </Grid>
                        <Grid item md={9} xs={9} style={{ textAlign: "center" }}>
                            <input />
                        </Grid>
                    </>
                )
            case 2:
                return (
                    <AddLocations />
                )
            case 3:
                return (
                    <AddServices />
                )
            default:
                return (
                    <p>Error</p>
                )
        }
    }

    return (
            <>
                <Card style={style.card}>
                    <Grid container alignItems="center" justifyContent="center">
                        {displayForm(formPage)}
                    </Grid>
                </Card>
                <Button onClick={() => handleNext("previous")}>Prev</Button>
                <Button onClick={() => handleNext("next")}>Next</Button>          
             </>         
    );
}

export default CreateContractor;