import { Item } from "@/types";
import { ObjectId } from "mongodb";
import connectToDatabase from "./database";

export const updateOneItem = async (id: string) => {
  const db = await connectToDatabase();
  const itemsCollection = db.collection<Item>("items");

  const filter = { _id: new ObjectId(id) }
  const update = { $set: { isChecked: true } }

  await itemsCollection.findOneAndUpdate(filter, update);
  return
}
