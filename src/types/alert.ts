import { JsonModel } from "./shared";

export type AlertItem = JsonModel & {
  id: string;
  type: "success" | "error";
  heading: string;
  message: string;
  created: number;
};
