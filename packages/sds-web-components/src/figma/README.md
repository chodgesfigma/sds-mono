# Figma Code-Connect files

This is where we keep our code-connect files. They link Figma properties to code, where we can define a template and how those properties are tranformed into the component library.

[General Docs](https://www.figma.com/code-connect-docs/)

## Adding a new story

1. Run `npm run scaffold:figma <component-name>`
   1. ie: `npm run scaffold:figma primitives/sds-button`
2. Update the `<URL>` part of the template with a tag from [the figma config file](sds-web-components/figma.config.json)
   1. ie: `<FIGMA_BUTTONS_BUTTON>`
3. Add the props that the Figma file has, and map them onto the web-component

## Pushing to Figma

> You'll need to generate a [personal access token](https://help.figma.com/hc/en-us/articles/8085703771159-Manage-personal-access-tokens) if you want to publish and see your code-connect files in Figma

1. Duplicate `.env.example` and rename it to `.env`
1. Plug-in your generated `FIGMA_ACCESS_TOKEN`
1. Run `npx figma connect publish` from the `sds-web-components` folder

## Issues along the way

- had to use `.ts` files, otherwise the publish command couldn't find the `*.figma` files
- the base Tag connect definition wasn't being populated into Figma without any clear errors, it eventually did load in (maybe a cache type thing?)
