import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

const AddServices = () => {

    const services = ["Mowing", "Trimming", "Landscape", "Other"]

    const [selectedServices, setSelectedServices] = useState({
        mowing: false,
        trimming: false,
        landscape: false,
        other: false
    })

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

    

    const selectServiceButton = (e, value) => {
        e.preventDefault();
        switch(value) {
            case "Mowing":
                setSelectedServices({ ...selectedServices, mowing: true })
            case "Trimming":
                setSelectedServices({ ...selectedServices, trimming: !selectedServices.trimming })
            case "Landscape":
                setSelectedServices({ ...selectedServices, landscape: !selectedServices.landscape })
            case "Other":
                setSelectedServices({ ...selectedServices, other: !selectedServices.other })
            default:
                console.log("test")
        }
        
    }


    return (
        <>
            <Grid item md={12} xs={12} style={{ textAlign: "center" }}>
                <p>Add Services</p>
            </Grid> 
            
                {services.map((service, index) => (
                    <Grid item md={12} xs={12} style={{ textAlign: "center" }} key={index}>
                        <Button onClick={(e, service) => selectServiceButton(e, service)}>{service}</Button>
                    </Grid>
                ))}
            
        </>          
    );
}

export default AddServices;