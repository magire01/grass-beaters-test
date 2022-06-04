/*

    Unauthed
    
    Service Search is home page

    Route to Login
    Route to SignUp
    
*/

import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import ServiceSearch from "./ServiceSearch";

import customerAPI from "../utilities/customer.json"

const UnAuthed = () => {
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
            <ServiceSearch />
        </>
    )
}

export default UnAuthed;
