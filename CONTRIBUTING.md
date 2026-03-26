# 🏗 Contributing new Templates to LabSTX Workshop

Thank you for contributing to the **LabSTX Workshop**! Your templates serve as starting points for new developers entering the **Stacks** ecosystem.

## 🚀 How to Add a New Template

To add a new template, follow these steps:

### 1. Create your Template Folder
Add a new directory at the root of the repository with a meaningful name (e.g., `nft-collection`):

```bash
mkdir nft-collection
cd nft-collection
# Add your contracts/, Clarinet.toml, package.json, and tests/
```

### 2. Standard Structure Requirements
Each template **MUST** include:
- `Clarinet.toml`: A valid project configuration.
- `contracts/`: A folder containing at least one `.clar` file.
- `package.json`: If tests are included (strongly recommended).
- `tests/`: High-quality unit tests using Vitest and `clarinet-sdk`.

### 3. Update the Index File
Modify the global `templates.json` at the root of the repository to include your new template:

```json
{
    "id": "nft-collection",
    "name": "🎨 NFT Collection",
    "description": "A SIP-009 fungible token implementation with mint and burn functionality.",
    "path": "nft-collection",
    "previewPath": "nft-collection/contracts/collection.clar"
}
```

*   **`id`**: Unique lowercase identifier.
*   **`name`**: Professional display name (icons welcome! 🚀).
*   **`description`**: A concise one-sentence description.
*   **`path`**: The folder name.
*   **`previewPath`**: Relative path to the primary contract for ID 'Preview' modal.

### 4. Create Metadata (Optional)
Specify additional details in a `metadata.json` folder inside your template if you want to provide deep links or author information.

## ✅ Contribution Checklist

Before submitting a Pull Request:
- [ ] Your code passes a `clarinet check`.
- [ ] At least 80% test coverage using `npm test`.
- [ ] Documentation/comments inside the `.clar` file explaining the logic.
- [ ] The `templates.json` entry is correctly formatted.

## ⚖️ Code of Conduct
Please be respectful to other contributors. Ensure your templates are clean, well-commented, and follow Clarity best practices.

---

**Happy Coding on Stacks!** 🧡
