import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import customerAPI from "../utilities/customer.json"
import contractorAPI from "../utilities/contractor.json"

const Authed = () => {
    const [user, setUser] = useState();

    // const getCustomer = async () => {
    //     API
    //         .get("getCustomer", "/api/{custId}")
    //         .then(print())
    // }

    const customerData = customerAPI.data[0]

    const contractorData = contractorAPI.data[0]

    useEffect(() => {
        setUser(contractorData)
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
        <>test</>
    )
}

export default Authed;