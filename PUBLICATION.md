# Distribution and publication notes

## Workspace distribution

A plugin owner can share a plugin with selected workspace users, by workspace link, or make it visible in that workspace's plugin directory when workspace permissions allow it.

## GitHub distribution

Workspace admins can import plugins from a public or private GitHub repository. A repository whose root contains `.claude-plugin/plugin.json` is a supported standalone plugin source. This is a practical way to open-source Mastery Tutor and let eligible workspaces import it.

## Universal public Plugins Directory

Publishing to a workspace directory is not the same as publishing to the universal public Plugins Directory.

OpenAI documents a public plugin catalog and documents that approved app submissions may be distributed through a plugin listing. At the time this package was prepared, OpenAI's public help documentation did not document a self-service universal-directory submission flow specifically for a skill-only plugin. Therefore this package does not claim that converting the skill to a plugin automatically makes it globally discoverable.

If universal directory publication becomes the product requirement, check the current OpenAI submission flow before adding an app solely for distribution. An app-backed plugin adds Apps SDK/MCP, hosting, privacy-policy, and review requirements that Mastery Tutor does not otherwise need.
