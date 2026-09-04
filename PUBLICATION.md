# Distribution and publication notes — v0.8.0

## Source distribution

The Skill, plugin manifest, and Cloudflare Worker source are public in `oozoofrog/mastery-tutor`.

## Managed workspace distribution

Eligible Business / Enterprise / Edu workspace administrators can import supported GitHub plugin manifests and configure installation policy. The exact controls depend on the current workspace rollout.

## App wrapper

v0.8.0 adds a no-auth, stateless, read-only MCP app wrapper. Deploy it to an HTTPS remote MCP endpoint (Cloudflare Workers is the reference deployment), test it with MCP Inspector, then configure it as a custom ChatGPT app where Developer Mode supports it.

## Public Plugin Directory

Publishing source code or a workspace plugin does not automatically publish a universal directory listing. OpenAI accepts app submissions and approved apps may be distributed through a plugin listing. Review the current safety, privacy, functionality, and submission requirements immediately before submission because Apps SDK remains a changing product surface.

## Privacy surface

The public policy pages live at:

- `https://oozoofrog.dev/mastery-tutor/privacy/`
- `https://oozoofrog.dev/mastery-tutor/terms/`
- `https://oozoofrog.dev/mastery-tutor/support/`
