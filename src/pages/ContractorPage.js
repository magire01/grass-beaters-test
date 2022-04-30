import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import contractorAPI from "../utilities/contractor.json"

const ContractorPage = () => {
    let [contractor, setContractor] = useState({
        name: "",
        aboutMe: "",
        availableLocations: [""],
        availableServices: [""]
    });

    useEffect(() => {
        setContractor(contractorAPI.data[0])
    }, [])

    return (
        <Grid container>
            <Grid item md={12}>
                <Card>
                    <h5>{contractor.name}</h5>
                    <p>{contractor.aboutMe}</p>
                </Card>
                <Card>
                    <h5>Available Locations</h5>
                    {contractor.availableLocations.map(location => (
                        <p>{location.city}</p>
                    ))}
                </Card>
                <Card>
                    <h5>Services</h5>
                   {contractor.availableServices.map(service => (
                        <p>{service.serviceType}</p>
                    ))} 
                </Card>
            </Grid>
        </Grid>
    );
}

export default ContractorPage;
