import Link from "next/link";

export default function Home() {
	return (
    	<div class="display_flex">
			<div>
				
			</div>
        	<div class="box flex_left">
        		<div>
              		<Link href="/game"> 
                		<button class="button button--wayra "> 게임 참가 </button>
              		</Link>
              		<button class="button button--wayra "> 방 만들기 </button>
            	</div>
				<div>
					<button class="button button--wayra "> 맵 만들기 </button>
					<button class="button button--wayra "> 게임 방법 </button>
				</div>
          	</div>
          	<div class="box flex_right">
	            <h4 font-size="30px"> <p> 채팅  </p> </h4> 
          	</div>
      </div>
  )
}
