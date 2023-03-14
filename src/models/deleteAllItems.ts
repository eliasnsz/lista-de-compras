import connectToDatabase from "./database";

export const deleteAllItems = async () => {

  const db = await connectToDatabase();
  const itemsCollection = db.collection("items");

  await itemsCollection.deleteMany({})
}
