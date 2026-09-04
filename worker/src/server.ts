import { McpServer } from "@modelcontextprotocol/server";
import { createMcpHandler } from "agents/mcp/server";
import { z } from "zod";
import {
  decideTutorState,
  learnerLevels,
  lessonStages,
  resultKinds,
  supportLevels
} from "./state";

const VERSION = "0.8.0";
const SITE = "https://oozoofrog.dev/mastery-tutor/";

function createServer() {
  const server = new McpServer({
    name: "Mastery Tutor State Engine",
    version: VERSION
  });

  server.registerTool(
    "tutor_state",
    {
      title: "Recommend the next Mastery Tutor teaching state",
      description:
        "Stateless, read-only pedagogical state engine for an active Mastery Tutor lesson. " +
        "Given a compact structured learning state, recommend the mentor, next lesson stage, and scaffold level. " +
        "Do not send the raw conversation, secrets, account identifiers, or unrelated personal data. " +
        "This tool does not generate subject-matter answers and does not persist state.",
      inputSchema: {
        goal: z.string().min(1).max(200).describe("Short learning goal or topic; do not include a transcript."),
        learnerLevel: z.enum(learnerLevels).default("unknown"),
        currentStage: z.enum(lessonStages).default("initial"),
        lastResult: z.enum(resultKinds).default("unknown"),
        supportLevel: z.enum(supportLevels).default("none"),
        stalledCount: z.number().int().min(0).max(10).default(0),
        reviewContext: z.boolean().default(false)
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false
      }
    },
    async (input) => {
      const decision = decideTutorState(input);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(decision)
          }
        ]
      };
    }
  );

  return server;
}

const mcpHandler = createMcpHandler(createServer);

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/mcp") {
      return mcpHandler(request, env, ctx);
    }

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "mastery-tutor-state-engine",
        version: VERSION
      });
    }

    if (url.pathname === "/") {
      return Response.json({
        name: "Mastery Tutor State Engine",
        version: VERSION,
        transport: "MCP Streamable HTTP",
        mcp: "/mcp",
        health: "/health",
        website: SITE,
        privacy: `${SITE}privacy/`,
        terms: `${SITE}terms/`,
        support: `${SITE}support/`
      });
    }

    return new Response("Not Found", { status: 404 });
  }
} satisfies ExportedHandler;
