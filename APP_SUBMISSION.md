# Mastery Tutor app submission checklist — v0.8.0

## App identity

- Name: Mastery Tutor
- Purpose: adaptive tutoring-state guidance for the Mastery Tutor learning workflow
- Authentication: none
- MCP transport: Streamable HTTP
- Tool: `tutor_state`
- Data writes: none
- Persistent storage: none

## Public URLs

- Website: `https://oozoofrog.dev/mastery-tutor/`
- Privacy: `https://oozoofrog.dev/mastery-tutor/privacy/`
- Terms: `https://oozoofrog.dev/mastery-tutor/terms/`
- Support: `https://oozoofrog.dev/mastery-tutor/support/`
- Source: `https://github.com/oozoofrog/mastery-tutor`
- Worker base URL: `https://mastery-tutor.oozoofrog.workers.dev`
- MCP endpoint: `https://mastery-tutor.oozoofrog.workers.dev/mcp`
- Health endpoint: `https://mastery-tutor.oozoofrog.workers.dev/health`

## ChatGPT development test

1. Verify the Worker health endpoint.
2. Use MCP Inspector to connect to `/mcp`, list tools, and call `tutor_state`.
3. In ChatGPT Developer Mode, create an app using `https://mastery-tutor.oozoofrog.workers.dev/mcp` when the current plan/workspace supports the tool type.
4. Authentication: none.
5. Select **Scan Tools** and verify `tutor_state` is discovered as read-only.
6. Exercise beginner, successful-transfer, stuck, answer-request, and review cases.
7. Review the current OpenAI app submission requirements immediately before submission because the preview requirements may change.

## Plugin association

The repository's `.claude-plugin/plugin.json` remains a valid skill/plugin source. It intentionally does not invent an app identifier before OpenAI creates or approves the app. Associate the approved app with the public plugin listing through the current OpenAI submission/plugin-management flow once an app identity is available.
