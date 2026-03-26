# 🚀 LabSTX Workshop: Official Starters & Blueprints

Welcome to the **LabSTX Workshop**, the dynamic template engine powering the [LabSTX IDE](https://github.com/USER/LabSTX). This repository serves as a live provider of Clarity smart contract templates, enabling developers to jumpstart their Stacks development with proven patterns and integrated tooling.

![LabSTX Banner](https://raw.githubusercontent.com/USER/LabSTX/main/public/banner.png) <!-- Placeholder for actual banner if available -->

## 🛠 Included Templates

| Template | Description | Path |
| :--- | :--- | :--- |
| **👋 Hello World** | A minimal introduction to Clarity syntax and read-only functions. | `/hello-world` |
| **🔢 Counter** | Learn state management with `define-data-var` and public state mutations. | `/counter` |
| **💎 Fungible Token** | A SIP-010-like implementation using `define-fungible-token`. | `/fungible-token` |
| **⚡ Clarity Starter** | A complete project boilerplate with Vitest, Clarinet SDK, and CI/CD ready. | `/clarity-starter` |

## 🕹 How to Use in LabSTX IDE

The LabSTX IDE fetches these templates dynamically. To use them:

1.  Open the **New Project** tab in LabSTX.
2.  The IDE will automatically fetch the latest index from this repository.
3.  Select a template to instantly clone it into your virtual workspace.

### For Custom IDE Deployments
If you are running your own fork of LabSTX, point your `GitHubTemplateService` to this repository:

```typescript
// IDE/services/githubTemplates.ts
const CONFIG = {
  OWNER: 'USER',
  REPO: 'labstx-workshop',
  BRANCH: 'main'
};
```

## 🏗 Repository Structure

Each folder in this repo represents a standalone project:
- **`templates.json`**: The global index used by the IDE to discover available starters.
- **`[template-name]/`**: Contains the full project structure (contracts, config, tests).
- **`[template-name]/metadata.json`**: (Optional) Extended metadata for the IDE.

## 🤝 Contributing

We welcome community contributions! Whether it's a DeFi primitive, an NFT collection, or a specialized library, your templates help growers the Stacks ecosystem.

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines on how to add new templates.

---

Built with ❤️ for the **Stacks Community** by [LabSTX Team](https://github.com/USER/LabSTX).
