'use client'

import {useRouter} from 'next/navigation'

export default function DetailLink(){

    return (
        <button onClick={()=>{ router.prefetch('/detail/dsds') }}>  버튼 </button>
    )
}