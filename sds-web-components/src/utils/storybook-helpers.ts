import { convertToKebabCase } from './utils';

type SpreadOptions<T> = {
  /**
   * keys to exclude
   */
  exclude?: Array<keyof T>;
  /**
   * keys to include
   */
  pick?: Array<keyof T>;
};

/**
 * Create the attributes/props based on args. Similar to `{...props}` in React
 * @param args - `args` passed in from `render` function
 * @param options - SpreadOptions
 * @returns
 */
export const spread = <T>(args: T, options?: SpreadOptions<T>) => {
  if (args && typeof args === 'object') {
    return (
      Object.entries(args)
        // If options are passed, filter keys based on `pick` or `exclude`
        .filter(([key]) => {
          if (options?.pick) {
            return options.pick?.includes(key as keyof T);
          } else if (options?.exclude) {
            return !options.exclude?.includes(key as keyof T);
          } else {
            return true;
          }
        })
        // Filter out entries where the value cannot be stringified (e.g. functions, undefined)
        .filter(([, value]) => Boolean(JSON.stringify(value)))
        .map(([key, value]) => `${convertToKebabCase(key)}=${JSON.stringify(value)}`)
        .join(' ')
    );
  } else {
    return '';
  }
};

/**
 * Options for the hideArgs storybook helper
 * @typedef {{ disableControl?: boolean, disableDocs?: boolean }} HideArgsOptions
 */
type HideArgsOptions = {
  /**
   * disable the controls within individual stories
   */
  disableControl?: boolean;
  /**
   * hide the controls from both storybook docs and stories
   */
  disableDocs?: boolean;
};

/**
 * Disable the storybook controls for specific args
 * @param args - `args` that exist on the story
 * @param {HideArgsOptions} options - The {@link HideArgsOptions} to be used
 * @returns a map of a story's controls to be spread into `argTypes`
 */
export const hideArgs = <G>(args: (keyof G)[], options?: HideArgsOptions) => {
  const { disableControl = false, disableDocs = false } = options ?? {};
  const hiddenArgMap: Record<string, { control: boolean; table: { disable: boolean } }> = {};
  args.forEach(arg => {
    hiddenArgMap[arg as string] = {
      control: !disableControl,
      table: {
        disable: disableDocs,
      },
    };
  });
  return hiddenArgMap;
};
