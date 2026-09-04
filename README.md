# Mastery Tutor Plugin v0.7.0

A skill-only plugin packaging the Mastery Tutor v0.6.3 tutoring skill as an installable plugin.

## What changes compared with the standalone skill

- The plugin becomes a first-class plugin unit rather than only an installed skill.
- On ChatGPT surfaces that expose plugin invocation controls, users can explicitly select/invoke the plugin instead of relying only on automatic skill selection.
- No external app, MCP server, account connection, database, or custom UI is required.
- The underlying tutoring behavior remains in `skills/mastery-tutor/`.

## Structure

```text
mastery-tutor/
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   └── mastery-tutor/
│       ├── SKILL.md
│       ├── agents/openai.yaml
│       └── references/...
├── README.md
└── PUBLICATION.md
```

## Validation target

This package uses the standalone Claude-compatible plugin manifest because OpenAI's GitHub plugin marketplace importer documents `.claude-plugin/plugin.json` as a supported standalone-plugin format when no marketplace manifest is present.

## Multi-turn note

Explicit plugin invocation can make selection clearer, but this package does not claim that ChatGPT will re-invoke the plugin on every follow-up turn. Test multi-turn behavior independently.

## Import into ChatGPT workspace

For an eligible workspace admin:

1. Open **Workspace settings → Plugins → Add → Import marketplace**.
2. Source: `https://github.com/oozoofrog/mastery-tutor`
3. Path: leave empty.
4. Branch: leave empty to follow the default branch.
5. Import, then open the imported plugin and set Installation policy to **Available** or **Installed**.
6. To share inside the workspace, open the plugin → `…` → **Share plugin** and choose the available audience.

This repository uses the standalone plugin format with `.claude-plugin/plugin.json` at the repository root.
