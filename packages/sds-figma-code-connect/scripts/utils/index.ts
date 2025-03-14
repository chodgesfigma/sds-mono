const upperCaseFirstCharacter = (toConvert: string) => {
  return toConvert[0].toUpperCase() + toConvert.slice(1);
};

export const convertToPascalCase = (toConvert: string) => {
  return upperCaseFirstCharacter(
    toConvert.replace(/-./g, (match) => match[1].toUpperCase())
  );
};

// util taken from: https://stackoverflow.com/questions/63116039/camelcase-to-kebab-case
// with an additional replacement for ending numbers
export const convertToKebabCase = (name: string) => {
  return name.replace(
    /[A-Z]+(?![a-z])|[A-Z]|\d$/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  );
};
