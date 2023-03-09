import { Item } from "@/types";
import connectToDatabase from "./database";

export const insertManyItems = async (items: Item[]) => {
  const db = await connectToDatabase();
  const itemsCollection = db.collection("items");

  await itemsCollection.insertMany(items);
  return
}
