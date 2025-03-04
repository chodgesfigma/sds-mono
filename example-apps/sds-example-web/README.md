## To Run:

1. Ensure that you've run `npm ci` at the top level of the monorepo.
2. Run a build from top level, and then ensure that dist exists within `packages/sds-web-components/` dir.
3. Run `npm run start` from `example-apps/sds-example-web`. This should create the dist dir, and populate it with the output of the `sds-web-components` package (This is just for local testing).
4. Visit: http://127.0.0.1:8080
