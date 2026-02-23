import express, { type Request, type Response } from "express";
import { MastraServer } from "@mastra/express";
import { mastra } from "./mastra/index.js";
import { env } from "../env.js";
import { chatRouter } from "./routes/chat/index.js";
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization",
//   );
//   if (req.method === "OPTIONS") {
//     return res.sendStatus(200);
//   }
//   next();
// });

// const server = new MastraServer({ app, mastra });
// await server.init();

app.use(chatRouter)

// Routes
app.get("/", (_req: Request, res: Response) => {
  res.json({ message: "Hello, World!" });
});

// Start server
app.listen(env.PORT, () => {
  console.log(`Server is running on http://localhost:${env.PORT}`);
});
