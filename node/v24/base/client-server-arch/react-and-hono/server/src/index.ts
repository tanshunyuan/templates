import express, { type Request, type Response } from "express";
import cors from "cors";
import { env } from "../env.js";

const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

// Start server
app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost:${env.PORT}`);
});
