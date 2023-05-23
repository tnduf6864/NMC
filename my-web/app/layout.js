import Link from "next/link";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title> 네비게이션 바 </title>
      </head>
      
      <body>
        <div className="navbar">          
          {/* <img src="cat.jpg" width="50px" height="50px" /> */}
          <Link href="/" class="tab"> 메인 </Link>
          <Link href="/game" class="tab"> 게임 참가 </Link>
          <Link href="/" class="tab"> 방 만들기 </Link>
          <Link href="/" class="tab"> 맵 만들기 </Link>
          <Link href="/" class="tab"> 로그인 </Link>
        </div>


        {children}
      </body>
    </html>
  )
} 