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
  origin:  process.env.ALLOWED || "http://localhost:5173",
  methods: "POST",
};
app.use(cors(options));

// ROUTES
app.use(router);

// LISTEN
app.listen(process.env.PORT || 8000, () => {
  console.log(" بسم الله الرحمن الرحيم " + "process.env.PORT");
});
