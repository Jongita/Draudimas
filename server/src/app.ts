import { Application } from "express";
import express from "express";
import { corsHeaders } from "./middleware.ts/cors.middleware";
import { ownersRouter } from "./routes/owners.router";

const app:Application=express();

app.use(express.urlencoded());

app.use(express.json());

app.use(corsHeaders);

app.use('/owners', ownersRouter);

export {app};