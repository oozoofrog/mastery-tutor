# Distribution and publication notes

## Personal ChatGPT accounts

The Plugin Directory is visible across ChatGPT plans, but GitHub marketplace import is a managed-workspace admin feature. Publishing this repository publicly does not create a self-service install path for a personal ChatGPT account.

For the underlying Mastery Tutor skill, ChatGPT supports uploading a skill from **Plugins → Skills → Create → Upload from your computer** where Skills are available.

## Managed workspace distribution

In eligible Business, Enterprise, and Edu workspaces, admins can import plugins from a public or private GitHub repository. A repository whose root contains `.claude-plugin/plugin.json` is a supported standalone plugin source.

After import, workspace policy controls whether the plugin is **Available** or **Installed**, and eligible plugin owners can share it with selected workspace users, by workspace link, or make it visible in that workspace's plugin directory when permissions allow it.

## GitHub distribution

This repository is useful as an open-source distribution source and for managed-workspace GitHub import. GitHub publication alone does not add Mastery Tutor to the universal public Plugin Directory.

## Universal public Plugins Directory

Publishing to a workspace directory is not the same as publishing to the universal public Plugins Directory.

OpenAI documents a public publication/submission flow for Apps SDK apps. Approved app submissions may be distributed through a plugin listing. At the time this document was updated, OpenAI's public help documentation did not document a comparable self-service global submission flow specifically for a skill-only plugin.

If universal public-directory publication is required, the currently documented route is to evaluate an Apps SDK app submission. That adds app/MCP, hosting, privacy-policy, review, and maintenance requirements that Mastery Tutor does not otherwise need, so it should be treated as a product-distribution decision rather than a packaging requirement.
