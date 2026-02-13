# Template Repository

This repository contains various templates that you can clone and use in your projects.

## Project Structure

Templates are organized by programming language, language version, and framework:

```
.
├── README.md
└── <language>
    └── <language-version>
        └── <framework>
            ├── <env-file>
            ├── mise.toml
            ├── <package-manager-config>
            ├── <lock-file>
            ├── <source-code>
            │   └── <entry-point>
            └── <config-file>
```

## Using Templates with degit

> **To learn more about degit?** Read through the [link](https://github.com/Rich-Harris/degit)

Templates in this repository can be cloned using the `npx degit` command. This allows you to quickly create a new project based on a template without needing to fork or clone this repository directly.

## Tool Management with mise

Templates may include a `mise.toml` file that specifies versions of tools and dependencies. You have two options for managing these tools:

- **Using mise**: Install and use [mise](https://github.com/jdx/mise) to manage all your development tools. This will automatically install and configure the versions specified in `mise.toml`.
  
  ```bash
  # Install mise (if not already installed)
  curl https://mise.jdx.dev/install.sh | sh
  
  # Use mise to install tools from mise.toml
  mise install
  
  # Run tools using mise
  mise run dev
  ```

- **Manual reference**: Simply refer to the `mise.toml` file to see which versions of tools are used in the template, and install those versions manually if needed.

### Command Syntax

```bash
npx degit <clone-url>/<path-to-template> <desired-folder-name>
```

- `template-path`: The path to the template in this repository (e.g., `node/v24/langgraph`)
- `desired-folder-name`: The name you want to give to the folder created on your system

### Examples

#### Clone a template in your project directory:

```bash
npx degit <clone-url>/node/v24/langgraph ts-agent
```

This will create a folder named `ts-agent` in your current directory containing the template files.

![degit-result](./assets/degit-cmd.png)
