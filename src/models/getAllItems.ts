import connectToDatabase from "./database";

export const getAllItems = async () => {

  const db = await connectToDatabase();
  const itemsCollection = db.collection("items");

  const findedItems = await itemsCollection.find({}).toArray();
  return findedItems;
}
