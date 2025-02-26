# SDS Figma Code Connect

This package contains configurations for syncing this component library with a Figma Design Library, via `Code Connect`.

## Usage

### Setup

You'll need to generate a [personal access token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) if you want to publish and see your code-connect files in Figma.

Once you have your token:

- Duplicate `.env.example` and rename it to `.env`
- Set your generated `FIGMA_ACCESS_TOKEN`

### Writing code connect files

[Reference this readme for more info](/packages/sds-web-components/src/figma/README.md)

### Syncing with Figma

There are two main commands:

```bash
npm run compile
```

- `compile` will combine each defined output in `outputConfig` and `documentUrlSubstitutions` into `figma.<output>.config.json` files in the `/configs`.

- It will also add in and update `package.json` scripts. Giving each output has its own `publish:<output>` command, as well as a `publish` command that combines them.

```bash
npm run publish
```

- `publish` will use the generated configs and push the code-connect files to the Figma design file.

> These commands can also be run at the project root level via `figma:compile` and `figma:publish`

## Configuration Files

### [documentUrlSubstitutions](./documentUrlSubstitutions.json)

This file contains key:value pairings that our `*.figma.ts` files can use to easily replace Figma Node URLS. Right now these are universal between all of our output types.

To change the target Figma design file, replace `mG9gWTcs6dZ0v0pNwKPnNK`.

[Read more about documentUrlSubstitutions in the Figma Docs.](https://www.figma.com/code-connect-docs/api/config-file/#documenturlsubstitutions)

### [outputConfig](./outputConfig.json)

This file contains any unique settings for the outputs, such as `imports` and `label`. `Imports` should point to a relative folder path that contains the `*.figma.ts` files that are relevant to that output type.

[Read more about config setup in the Figma Docs.](https://www.figma.com/code-connect-docs/api/config-file/)
