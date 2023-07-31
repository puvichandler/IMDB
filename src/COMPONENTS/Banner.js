import React, { useEffect } from 'react'
import './Banner.css';
import axios from 'axios';
function Banner() {
//  useEffect(function (){
//       (function () {
//         axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38")
//         .then((res) =>{
//             console.table(res.data);
//         })
//       })()
//     },[])
  return (
    <div className='m:h-[40vh] '>
      <img src='https://images5.alphacoders.com/721/721445.png' ></img>
      <div className='parent banner-head h-[100px] '>
        <div className=' bg-gray-900 text-white text-xl  pt-6 bg-opacity-30 text-center py-6'>
          BATMAN : ARKHAM KNIGHT
        </div>
      </div>

    </div>
  )
}

export default Banner