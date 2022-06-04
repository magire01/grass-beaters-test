import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from "@mui/material/Button";

import Authed from "./Authed";
import UnAuthed from "./UnAuthed";

import customerAPI from "../utilities/customer.json"

const Home = (props) => {
    const style = {
        card: {
            width: "auto",
            padding: 10,
            margin: 10,
            backgroundColor: "lightgreen"
        }
    }

    if (!props.auth)
    return (
        <UnAuthed />
    )
    return (
        <Authed />
    )
}

export default Home;
