export const nodeIdRegex = new RegExp(/node-id=(\d+:\d+)/);

export type Data = string[][];
export type Parser = (data: Data) => string;
