import { connectDB } from "@/util/database"
import Link from "next/link";
import DetailLink from "./DetailLink";


export default async function List() {

    const db = (await connectDB).db("forum") 
    let result = await db.collection('post').find().toArray() //await: 값을 받을 때 까지기다려줘
    let link = ["/6466386e5f6e46f3f3ed45fc", "/64663dd45f6e46f3f3ed45ff", "/646641885f6e46f3f3ed4600"]
    //console.log(result)

    /** let data = { name : 'kim', age : 20} //object 자료형
     *  console.log(data.name)
     */

    return (
        <div className="list-bg">   
        {
            result.map((a, i) => (     
                <Content key={i} map={result[i]} link={link[i]}/>                  
            ))     
        } 
        </div>     
    )
  } 

  function Content(props) {
    return (        
        <div className="list-item">
            <Link href={'/detail' + props.link}>
                <h4>{props.map.title}</h4>
            </Link>            
            <p>{props.map.content}</p>
        </div>        
    )
  }