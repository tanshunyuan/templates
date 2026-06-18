import { createEnv } from "@t3-oss/env-core";
import dotenv from "dotenv";

dotenv.config();

export const env = createEnv({
  server: {},
  runtimeEnv: process.env,
});
