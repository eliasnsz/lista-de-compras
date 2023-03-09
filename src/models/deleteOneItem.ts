import { Item } from "@/types";
import { ObjectId } from "mongodb";
import connectToDatabase from "./database";

export const deleteOneItem = async (id: string) => {
  const db = await connectToDatabase();
  const itemsCollection = db.collection<Item>("items");

  const filter = { _id: new ObjectId(id) }

  await itemsCollection.findOneAndDelete(filter);
  return
}
