import { ObjectId } from "mongodb";

export interface Item {
  _id: ObjectId;
  name: string;
  quantity: number;
  unit: "un" | "kg" | "g";
  isChecked: boolean;
  created_at: string;
}