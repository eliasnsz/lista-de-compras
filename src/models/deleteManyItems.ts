import { Item } from "@/types";
import { ObjectId } from "mongodb";
import connectToDatabase from "./database";

export const deleteManyItems = async (ids: string[]) => {
  // const db = await connectToDatabase();
  // const itemsCollection = db.collection<Item>("items");
  
  // await itemsCollection.deleteMany({ _id: { $in: ids } });
  return
}