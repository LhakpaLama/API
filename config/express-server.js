//const express =require("express");
import express from "express";
const server =express();
const PORT = process.env.PORT || 3000;

//override list method
server.listen=server.listen.bind(server, PORT, ()=>
    console.log(`Listening on ${PORT}`)
);

//module.exports=server;
export {server};