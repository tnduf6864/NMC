 # 새로운 프로젝트 생성 / MongoDB 셋팅
 
 - 관계형 DB  - 내가 원래 아는 DB 저장방식
 - 비관계형 DB - 데이터 저장이 자유로움 JS Object식 ( { 데이터이름 : 내용1, 데이터이름 : 내용2 }..., 분산처리 잘해줌(대용량)

# Next.js에서 MongoDB 사용하기
  1. mongodb 설치
    (npm install mongodb)
  2. export default **async** ...
  3.        
          
    const client = await MongoClient.connect('mongodb+srv://tnduf6864:ksy134679!@bomi.lhfmhne.mongodb.net/', { useNewUrlParser: true }) //db접속용 아이디:비번@... 
    const db = client.db("forum") //데이터베이스 이름
        
   4. connect()는 자주 사용하면 문제 생겨 -> 따로 db접속용 js파일 만들어서 사용 
   
     import { MongoClient } from 'mongodb'
     const url = 'DB접속URL~~'
     const options = { useNewUrlParser: true }
     let connectDB

     if (process.env.NODE_ENV === 'development') {
       if (!global._mongo) {
         global._mongo = new MongoClient(url, options).connect()
       }
       connectDB = global._mongo
     } else {
       connectDB = new MongoClient(url, options).connect()
     }
     export { connectDB }
     
   5. 모든 데이터를 가져와서 출력
    
    await db.collection('post').find().toArray()
   
# 글목록 조회기능 만들기 (DB 데이터 출력)
 1. await - JS는 로드가 안되면 다른 거 부터 하는 데 await을 붙이면 기다려준다.
 2. let result 로 db데이터 전부 받아서 result[0].title, result[0].content로 사용
 3. 맵 props로 받아 쓰려면 map = {result[0]}으로 넘긴다음 props.map.title(content)로 사용
