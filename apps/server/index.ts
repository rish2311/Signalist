import { serve } from "bun";
import { inngest } from "./lib/inngest/client";
import { sendDailyNewsSummary, sendSignUpEmail } from "./lib/inngest/functions";

const server = serve({
  port: process.env.PORT || 3001,
  async fetch(req) {
    const url = new URL(req.url);
    
    // Handle Inngest webhook
    if (url.pathname === "/api/inngest") {
      const { serve: inngestServe } = await import("inngest/bun");
      const handler = inngestServe({
        client: inngest,
        functions: [sendSignUpEmail, sendDailyNewsSummary],
      });
      return handler(req);
    }
    
    // Health check endpoint
    if (url.pathname === "/health") {
      return new Response("OK", { status: 200 });
    }
    
    return new Response("Not Found", { status: 404 });
  },
});

console.log(`Server running on port ${server.port}`);