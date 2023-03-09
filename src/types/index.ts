export interface Item {
  name: string;
  quantity: number;
  unit: "un" | "kg" | "g";
  isChecked: boolean;
  created_at: string;
}