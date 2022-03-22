export type VoidFunction = () => void;
export type BooleanFunction = () => boolean;

export interface AlertItem {
  id: string;
  type: "success" | "error";
  heading: string;
  message: string;
}

export interface JsonModel {
  [key: string]:
    | string
    | boolean
    | number
    | number[]
    | string[]
    | null
    | JsonModel;
}

export type RequestFunction = (
  data: JsonModel, // eslint-disable-line no-unused-vars
  ...params: any // eslint-disable-line
) => Promise<JsonModel>;
