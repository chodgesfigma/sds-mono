import fs from "fs";
import path from "path";

const filePath = path.resolve("lib/components.ts");
let content = fs.readFileSync(filePath, "utf8");

// Replace only the JSX import path
content = content.replace(
  /import type { JSX } from 'sds-web-components\/dist\/components';/,
  "import type { JSX } from 'sds-web-components/dist/types';"
);

fs.writeFileSync(filePath, content, "utf8");
