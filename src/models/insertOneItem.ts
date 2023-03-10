import { Item } from "@/types";
import connectToDatabase from "./database";

export const insertOneItem = async (item: Item) => {
  const db = await connectToDatabase();
  const itemsCollection = db.collection("items");

  await itemsCollection.insertOne(item);
  return
}
