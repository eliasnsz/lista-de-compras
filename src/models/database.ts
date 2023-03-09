import { Db, MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI as string

let cachedDb: null | Db;

export default async function connectToDatabase() {

  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(uri)  
  const db = client.db("marketlist")
  cachedDb = db
  return db
}