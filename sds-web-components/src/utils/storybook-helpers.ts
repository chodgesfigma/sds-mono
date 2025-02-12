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
        .map(([key, value]) => `${key}=${JSON.stringify(value)}`)
        .join(' ')
    );
  } else {
    return '';
  }
};
