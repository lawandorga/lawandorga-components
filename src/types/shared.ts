/*
// functions
*/
export type RequestFunction = (...args: any[]) => Promise<any>; // eslint-disable-line

/*
// models
*/
export type JsonModel = {
  // [key: string]: JsonValues | JsonModel | JsonModel[];
  [key: string]: any; // eslint-disable-line
};
