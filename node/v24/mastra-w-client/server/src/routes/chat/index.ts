import { Router } from "express";
import { handleChatStream } from "@mastra/ai-sdk";
import { toAISdkV5Messages } from "@mastra/ai-sdk/ui";
import {
  createUIMessageStreamResponse,
  pipeUIMessageStreamToResponse,
} from "ai";
import { mastra } from "../../mastra/index.js";

const router: Router = Router();

const THREAD_ID = "example-user-id";
const RESOURCE_ID = "weather-chat";

router.post("/chat", async (req, res) => {
  console.log("at router.post(/chat)");
  const stream = await handleChatStream({
    mastra,
    agentId: "weather-agent",
    params: {
      ...req.body,
      memory: {
        ...req.body.memory,
        thread: THREAD_ID,
        resource: RESOURCE_ID,
      },
    },
  });
  return pipeUIMessageStreamToResponse({
    response: res,
    stream,
  });
});

router.get("/chat", async (req, res) => {
  const memory = await mastra.getAgentById("weather-agent").getMemory();
  let response = null;

  try {
    response = await memory?.recall({
      threadId: THREAD_ID,
      resourceId: RESOURCE_ID,
    });
  } catch {
    console.log("No previous messages found.");
  }

  const uiMessages = toAISdkV5Messages(response?.messages || []);
  return res.json(uiMessages);
});

export { router as chatRouter };
