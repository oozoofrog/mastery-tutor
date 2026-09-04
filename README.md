# Mastery Tutor v0.8.0

Mastery Tutor is a conversation-native adaptive tutoring workflow for ChatGPT and Codex.

v0.8.0 keeps the existing tutoring Skill and adds a deliberately small Apps SDK/MCP-compatible backend: a stateless Cloudflare Worker that recommends the next pedagogical state. The backend is optional for the Skill itself, but gives the public app a real read-only function rather than a no-op wrapper.

## Architecture

```text
GitHub: oozoofrog/mastery-tutor
├── .claude-plugin/plugin.json
├── skills/mastery-tutor/        # teaching policy and conversation UX
├── worker/                       # Cloudflare remote MCP app
│   ├── src/server.ts
│   └── src/state.ts
└── APP_SUBMISSION.md

GitHub Pages / personal site
└── https://oozoofrog.dev/mastery-tutor/
    ├── privacy/
    ├── terms/
    └── support/

Cloudflare Workers
└── https://<worker>.workers.dev/mcp
    └── tutor_state (read-only, stateless)
```

## What the app does

`tutor_state` accepts only compact structured lesson state such as learner level, current stage, last-result category, support level, and stall count. It returns a recommended mentor, next stage, and scaffold level.

The app:

- does not need a database;
- does not require login or OAuth;
- does not write or modify external data;
- does not ask for the raw conversation transcript;
- does not call another model or external data API;
- does not replace the Skill's subject-matter teaching logic.

## Deploy the Worker

```bash
cd worker
npm install
npx wrangler login
npm run deploy
```

Cloudflare's current recommended pattern for new stateless MCP servers is Streamable HTTP with `createMcpHandler()`. After deployment, record the resulting `https://...workers.dev/mcp` URL in `APP_SUBMISSION.md` and test it with MCP Inspector.

## Public pages

The public website, privacy policy, terms, and support pages are maintained in `oozoofrog/oozoofrog.github.io` and published under `https://oozoofrog.dev/mastery-tutor/`.

## ChatGPT app testing

Create a custom app in ChatGPT Developer Mode using the deployed MCP endpoint and select **Scan Tools**. Plan/workspace support for arbitrary custom MCP tools varies; check the current OpenAI Help Center before testing or submitting.

## Plugin packaging

The repository continues to use `.claude-plugin/plugin.json` for the skill/plugin source. The manifest does not invent a public app identifier before OpenAI creates or approves the app. Once the app has a canonical identity in OpenAI's system, associate it with the plugin listing through the current submission/plugin-management flow.

## Multi-turn limitation

An app selected for one ChatGPT message is not documented as a conversation-wide persistent mode. The Skill remains responsible for conversation continuity; the app only provides deterministic pedagogical state advice when it is available and invoked.

## Distribution

- Public source: this GitHub repository.
- Managed workspace plugin import: supported where GitHub plugin marketplace import is available.
- Public Plugin Directory: requires the current OpenAI app/plugin submission and review flow; a public GitHub repository alone does not publish a directory listing.
