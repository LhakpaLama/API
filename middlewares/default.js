// const helmet = require("helmet");
// const cors = require("cors");
// const express = require("express");
// const basicAuth = require("express-basic-auth");
import helmet from "helmet";
import cors from "cors";
import express from "express";
import basicAuth from "express-basic-auth";
//import { server } from "../config";
//module.exports = server => {
    export default server=>{
    //apply CORS
    server.use(cors());
    //apply HTTP security headers
    server.use(helmet());
    // apply basic authentication - checks req Authentication header
    server.use(
        basicAuth({
            users:{
                admin:"super"
            },
            challenge: true
        })
    );
    //handle request  JSON Body -- no need to use body parser lib anymore
    server.use(express.json());
}