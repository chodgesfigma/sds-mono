// util taken from: https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case
// with an additional replacement for ending numbers
export const convertToKebabCase = (name: string) => {
  return name.replace(/[A-Z]+(?![a-z])|[A-Z]|\d$/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase());
};
