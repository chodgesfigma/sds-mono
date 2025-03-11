# SDS Figma Code Connect

This package contains configurations for syncing this component library with a Figma Design Library, via `Code Connect`.

You can read more about Code Connect via their [General Docs](https://www.figma.com/code-connect-docs/).

## Usage

### Setup

You'll need to generate a [personal access token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) if you want to publish and see your code-connect files in Figma.

Once you have your token:

- Duplicate `.env.example` and rename it to `.env`
- Set your generated `FIGMA_ACCESS_TOKEN`

### Writing code-connect files

To create a code connect file, there are 2 main types of files to be written: `props` and `code-connect`. This package helps with prop defintion re-use, by generating `*.figma.ts(x)` files.

To create a new code-connect file:

1. run `npm run scaffold sds-button`
1. add prop definitions in `props/sds-button`
   1. a prop object's name should be unique if it has unique props, as generation uses a key:value pair map for prop injection
1. write examples in `code-connect/<output>/sds-button` for each output defined

> icons are special in that they're all kept in a single file (one for HTML, one for React). Their data comes from the base SDS repo (in the /scripts/create-icons-figma-file/icons.json file) and the `.figma.ts(x)` file is generated via the `npm run scaffold:icons` command.

> Due to their large component count, icons are by default ignored via the `outputConfig` setup

### Syncing with Figma

There are two main commands:

```bash
npm run build
```

- will run `build:config` and then `build:code-connect`
- `build:config` will combine each defined output in `outputConfig` and `documentUrlSubstitutions` into `figma.<output>.config.json` files in the `/configs`.

  - It will also add in and update `package.json` scripts. Giving each output has its own `publish:<output>` command, as well as a `publish` command that combines them.

- `build:code-connect` will generate `*.figma.ts(x)` files in a `dist` output folder
  - These are combinations of shared `/props` and output specific `/code-connect` files

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

## Code Connect Files

### [/code-connect](./src/code-connect/)

These files are separated by output language (`angular`, `react`, `vue`, `web` as well as `icons`), and they contain the code examples that get injected into Figma.

### [/props](./src/props/)

These are the shared Figma prop definitions.

> Some of these have `types` defined, due to some of the types aren't resolvable to TS outside of a `figma.connect()` function.

## Issues along the way

- The HTML parser only looks at `.ts` files, otherwise the publish command couldn't find the `*.figma` files, this didn't seem to be pointed out in the docs, and the publish cli command's only "error" was not finding files.
- The base Tag connect definition wasn't being populated into Figma without any clear errors, however it eventually did load in. This could have been a cache issue, or something incorrect initial setup.

### Prop Types

Typescript can't resolve certain types when they're outside of a `figma.connect()` function. This means that with the setup of having shared prop definitions, we need to manually type these values.

#### Instance props like:

```ts
figma.instance('Icon');
```

These would ideally resolve into `JSX.Element`, but result in an `instance<any>`, so we manually accept that value.

#### Complex types like:

```ts
description: figma.boolean('Has Description', {
  true: figma.string('Description'),
  false: undefined,
}),
```

This resolves as a `boolean<string, any>`, which typescript really does not like. This really resolves as either a `string` or as `undefined`, so we manually type it as: `description?: string;`.

#### Enum props:

```ts
scheme: figma.enum('Scheme', {
  Danger: 'danger',
  Positive: 'positive',
  Warning: 'warning',
  Neutral: 'neutral',
}),
```

In our setup, this resolves as a `string` type, which is fine for actual code-syncing, but when working with a React code-connect file typescript knows that `string` doesn't equal an enum (like `brand | danger | positive | warning | neutral`).

So we can manually type these enums via `figma.enum<TagScheme>(...)`
