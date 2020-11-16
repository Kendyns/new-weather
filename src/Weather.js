import React from "react";
import axios from "axios";
import Search from "./Search.js";
import "./Weather.css";

export default function Weather(){
    return (
        <div className ="container">
        <Search />
        </div>
    );
}