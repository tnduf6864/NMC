import { ObjectId } from "mongodb";
import { connectDB } from "@/util/database.js"

export default async function Detail(props) {

    const db = (await connectDB).db("forum") 
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.  id) })
    //6466386e5f6e46f3f3ed45fc

    return (
        <div>
            <h4> 상세페이지 </h4>
            <h4> {result.title} </h4>
            <p> {result.content} </p>
        </div>
    )
}