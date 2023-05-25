import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://tnduf6864:ksy134679!@bomi.lhfmhne.mongodb.net/'
const options = { useNewUrlParser: true }
let connectDB   //갖다 쓸 변수

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }