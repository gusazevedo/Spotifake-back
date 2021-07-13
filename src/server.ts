import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import cors from "cors";
import "express-async-errors";
import "reflect-metadata";
import "./database";

const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return response.status(400).json({
        error: err.message,
      });
    }

    return response.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
);

app.listen(3030, () => console.log("Server is running"));
