/*
// functions
*/
export type RequestFunction = (...args: any[]) => Promise<any>; // eslint-disable-line

/*
// models
*/
export type JsonValue = string | boolean | number | null | number[] | string[];

export type JsonModel = null | {
  [key: string]: JsonValue | JsonModel;
};
