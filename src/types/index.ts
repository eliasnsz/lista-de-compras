import { ObjectId } from "mongodb";

export interface Item {
  _id: string;
  name: string;
  quantity: number;
  unit: "un" | "kg" | "g";
  isChecked: boolean;
  created_at: string;
}