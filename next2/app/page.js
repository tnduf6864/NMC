import { connectDB } from "@/util/database"
import { MongoClient } from "mongodb"

export default async function Home() {
  
  const db = (await connectDB).db("forum") //데이터베이스 이름
  let result = await db.collection('post').find().toArray() //DB 입출력 코드는 Server component에만 써야함
  console.log(result)

  return (
    <div> 안녕 </div>
  )
}
