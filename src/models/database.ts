import { Db, MongoClient } from "mongodb"

const uri = process.env.MONGO_URI as string
const databaseName = process.env.MONGO_DB as string

let cachedDb: null | Db;

export default async function connectToDatabase() {

  if (cachedDb) {
    return cachedDb;
  }

  const client = new MongoClient(uri)  
  const db = client.db(databaseName)
  cachedDb = db
  
  return db
}