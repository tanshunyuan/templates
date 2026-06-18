import express, { type Request, type Response } from "express";
import cors from "cors";

const app = express();
const PORT = Number(process.env.PORT) || 3333;

app.use(express.json());
app.use(cors());

app.get("/healthcheck", (_req: Request, res: Response) => {
  res.json({ message: "ok" });
});

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
