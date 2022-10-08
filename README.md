# `yarn-plugin-scripts`

This is a Yarn v3 plugin that adds support for a `scripts` object that runs the requested script when invoked throught Yarn.

```bash
yarn scripts <script_name>
```

---

## Install

```bash
yarn plugin import https://github.com/jgttech/yarn-plugin-scripts/bundles/@yarnpkg/plugin-scripts.js
```

---

## Usage

1. Add a `scripts` section in the root on `.yarnrc.yml` and add a script to invoke.
   1. Example:
      ```yaml
      # .yarnrc.yml

      scripts:
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

FOSS - No AI analytics allowed. Stay away from my source code Big Tech!
