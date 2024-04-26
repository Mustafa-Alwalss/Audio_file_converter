import express, { Express, Request, Response } from "express";
import router from "./routes/routes";
import cors, { CorsOptions } from "cors";
import dotenv from "dotenv";
dotenv.config();
const app: Express = express();

// MIDDLEWARES

// CORS
// -OPTIONS
const options: CorsOptions = {
  origin: process.env.ALLOWED,
  methods: "POST",
};
app.use(cors(options));

// ROUTES
app.use(router);

// LISTEN
app.listen(process.env.PORT || 3000, () => {
  console.log(" بسم الله الرحمن الرحيم " + process.env.PORT);
});
