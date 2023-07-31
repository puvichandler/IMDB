import React, { useEffect, useState } from 'react'
import Image from '../IMG/oppenheimer-poster-1658411601593.jpeg'
import axios from 'axios'
import { hover } from '@testing-library/user-event/dist/hover';
import PageNation from './PageNation';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourites, favMovies } from './Redux/favouriteReducer';

function Movies() {
  let [movies, setmovies] =useState([])
  const [pageNum,SetpageNum] = useState(1);
  const [hovered,setHovered] = useState("")
  let [Favourites,setFavourites] = useState([])

  let data = useSelector(favMovies)
  const dispatch = useDispatch();

  useEffect(function (){
    (function () {
      axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=565dda78aae2b75fafddbc4320a33b38&page=" + pageNum)
      .then((res) =>{
          console.log(res.data.results);
        setmovies(res.data.results);
      })
    })()
  },[pageNum])
  // for pagenation
  const onPrev =()=>{
    if(pageNum > 1) {
        SetpageNum(pageNum-1);
    }
}
const onNext =()=>{
        SetpageNum(pageNum +1);
}
// to show and hide on hover
const showEmoji =(id)=>{
  setHovered(id)
}
const hideEmoji = ()=>{
  setHovered('')
}
// add/remove to or from favourites
const addEmoji = (id)=>{    
  const newFav = [...Favourites];
  newFav.push(id);
  setFavourites(newFav)
}

const removeEmoji = (id)=>{
  const filteredFav = Favourites.filter(elem =>{
    return elem != id;
  })
  setFavourites(filteredFav);
}
  return (

       <div className='mt-8'>
      <div className='mb-8 font-bold text-2xl text-center m-4'>
        TRENDINGS MOVIES
      </div>

      <div className='flex flex-wrap justify-center gap-7'>
        {
          movies.length == 0 ? <h1>...LOADING</h1> : movies.map((movie) =>{
            return(
                <div onMouseOver={
                  ()=>{showEmoji(movie.id)}
                }
                onMouseLeave={
                  ()=>{hideEmoji(movie.id)}
                }
                key={movie.id} className='bg-center bg-cover border-2 w-[150px] h-[240px] m-4  rounded-xl hover:scale-110 duration-300 flex items-end relative'
                style={{
                  backgroundImage:
                      `url(
                      https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path})`
              }}
              >

                  <div className='p-2 bg-gray-900 absolute top-2 right-2 rounded-xl'
                  style={{
                    display:hovered==movie.id? "block" : "none"
                  }}>
                    {Favourites.includes(movie.id) ==false ? <div className='' onClick={()=>{addEmoji(movie.id);
                    dispatch(addFavourites(movie));}}>
                    💖
                    </div>: <div className=''onClick={()=>{removeEmoji(movie.id)}}>
                    💘
                      </div>}
                  </div>
                  <div className='font-bold text-white bg-gray-900 bg-opacity-60 py-2 text-center w-full rounded-b-xl'>
                    {movie.title || movie.name}
                  </div>
              </div>)
          })
        }
        {/* <div className='bg-[url(https://images.alphacoders.com/763/763328.png)] bg-center bg-cover w-[150px] h-[30vh] m-4  rounded-xl hover:scale-110 duration-300  '>
        </div> */}
      </div>
      <PageNation
      pageNum={pageNum}
      onPrev={onPrev}
      onNext={onNext}/>
      {/* <div className='text-center  font-bold'>
        SUICIDE SQUAD
      </div> */}

    </div>
  )
}

export default Movies