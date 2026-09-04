# Mastery Tutor State Engine

A minimal, stateless, no-auth MCP app wrapper for Mastery Tutor.

## Purpose

The Skill remains responsible for teaching content and conversation UX. This Worker only recommends the next pedagogical state from compact structured inputs:

- mentor mode;
- next lesson stage;
- scaffold level;
- whether to ask one question;
- whether an explicit answer must be revealed immediately;
- whether the next fresh item can establish independent evidence.

It intentionally does **not** accept or store a raw conversation transcript.

## Endpoints

- `/mcp` — MCP Streamable HTTP endpoint.
- `/health` — JSON health check.
- `/` — JSON service metadata and policy links.

## Local development

```bash
cd worker
npm install
npm run dev
```

Then connect MCP Inspector to `http://localhost:8787/mcp` (use the actual port printed by Wrangler).

## Deploy to Cloudflare Workers

```bash
cd worker
npm install
npx wrangler login
npm run deploy
```

Wrangler will deploy to a `*.workers.dev` HTTPS endpoint. Use the resulting `/mcp` URL when configuring the ChatGPT app.

You can alternatively connect this GitHub repository to Cloudflare and configure `worker` as the project root so pushes to `main` deploy automatically.

## No authentication by design

v0.8.0 exposes only deterministic read-only tutoring-state advice. It has no user accounts, OAuth, database, KV, Durable Objects, R2, or write actions. Add authentication before introducing user-specific stored data or privileged actions.
