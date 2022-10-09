# `yarn-plugin-scripts`

This is a Yarn v3 plugin that adds support for a `scripts` object that runs the requested script when invoked throught Yarn.

```bash
yarn scripts <script_name>
```

---

## Install

```bash
yarn plugin import https://raw.githubusercontent.com/jgttech/yarn-plugin-scripts/0.0.3/bundles/@yarnpkg/plugin-scripts.js
```

---

## Usage

You can create custom scripts in the `.yarnrc.yml` file and invoke them through the `scripts` namespace. For example, if I had a script called `hello` and I wanted to invoke it, I just run `yarn scripts hello`.

Beyond that, there are lifecycle hooks as well, please see the section on that.

---

## Lifecycle Scripts

These hooks are designed to follow the Yarn 3 hooks and allow them to be invoked, automatically, though certain conditions.

1. ***afterAllInstalled***: This gets run, as the name suggests, once all depdnencies are installed. It is, effectively, a lifecycle around Yarn 3 hooks.
2. *More may be added later*

---

## Custom Scripts

This shows you how to add custom scripts.

1. Add a `scripts` section in the root on `.yarnrc.yml` and add a script to invoke.
   1. Example:
      ```yaml
      # .yarnrc.yml

      scripts:
        afterAllInstalled:
          - echo "1 Things to do after a yarn install".
          - echo "2 Things to do after a yarn install".
          - echo "3 Things to do after a yarn install".
        hello:
          - echo "This is awesome!"
          - echo "Hello!"
        world:
          - echo "world!"
      ```

2. Invoke that preferred script:
   1. Example:
      ```bash
      yarn scripts hello
      ```

## License

FOSS - No AI analytics allowed. Read my LICENSE file. Stay away from my source code Big Tech!
