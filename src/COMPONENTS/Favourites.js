import React, { useEffect, useState } from 'react'
import PageNation from './PageNation';
import { useSelector } from 'react-redux';
import { favMovies } from './Redux/favouriteReducer';

let genreids = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation', 35: 'Comedy',
  80: 'Crime', 99: 'Documentary',
  18: 'Drama', 10751: 'Family',
  14: 'Fantasy', 36: 'History',
  27: 'Horror',
  10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV', 53: 'Thriller',
  10752: 'War',
  37: 'Western'
}
let SampleMovies = [
  {
    "adult": false,
    "backdrop_path": "/ogFIG0fNXEYRQKrpnoRJcXQNX9n.jpg",
    "id": 619930,
    "title": "Narvik",
    "original_language": "no",
    "original_title": "Kampen om Narvik",
    "overview": "April, 1940. The eyes of the world are on Narvik, a small town in northern Norway, a source of the iron ore needed for Hitler's war machine. Through two months of fierce winter warfare, the German leader is dealt with his first defeat.",
    "poster_path": "/gU4mmINWUF294Wzi8mqRvi6peMe.jpg",
    "media_type": "movie",
    "genre_ids": [
      10752,
      18,
      36,
      28
    ],
    "popularity": 321.063,
    "release_date": "2022-12-25",
    "video": true,
    "vote_average": 7.406,
    "vote_count": 53
  },
  {
    "adult": false,
    "backdrop_path": "/6RCf9jzKxyjblYV4CseayK6bcJo.jpg",
    "id": 804095,
    "title": "The Fabelmans",
    "original_language": "en",
    "original_title": "The Fabelmans",
    "overview": "Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth.",
    "poster_path": "/d2IywyOPS78vEnJvwVqkVRTiNC1.jpg",
    "media_type": "movie",
    "genre_ids": [
      18
    ],
    "popularity": 163.3,
    "release_date": "2022-11-11",
    "video": false,
    "vote_average": 8.02,
    "vote_count": 561
  },
  {
    "adult": false,
    "backdrop_path": "/fTLMsF3IVLMcpNqIqJRweGvVwtX.jpg",
    "id": 1035806,
    "title": "Detective Knight: Independence",
    "original_language": "en",
    "original_title": "Detective Knight: Independence",
    "overview": "Detective James Knight 's last-minute assignment to the Independence Day shift turns into a race to stop an unbalanced ambulance EMT from imperiling the city's festivities. The misguided vigilante, playing cop with a stolen gun and uniform, has a bank vault full of reasons to put on his own fireworks show... one that will strike dangerously close to Knight's home.",
    "poster_path": "/jrPKVQGjc3YZXm07OYMriIB47HM.jpg",
    "media_type": "movie",
    "genre_ids": [
      28,
      53,
      80
    ],
    "popularity": 119.407,
    "release_date": "2023-01-20",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 10
  },
  {
    "adult": false,
    "backdrop_path": "/e782pDRAlu4BG0ahd777n8zfPzZ.jpg",
    "id": 555604,
    "title": "Guillermo del Toro's Pinocchio",
    "original_language": "en",
    "original_title": "Guillermo del Toro's Pinocchio",
    "overview": "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
    "poster_path": "/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
    "media_type": "movie",
    "genre_ids": [
      16,
      14,
      18
    ],
    "popularity": 754.642,
    "release_date": "2022-11-18",
    "video": false,
    "vote_average": 8.354,
    "vote_count": 1694
  }
]

function Favourites() {
  let favMoviesClicked = useSelector(favMovies);
  let [genres, setgenres] = useState([])
  let [movies, setmovies] = useState(JSON.parse(JSON.stringify(favMoviesClicked)));
  let [searchItem, setSearchItem] = useState(" ");
  let [curGenre, setCurrentgenre] = useState("All Genre")
  let [curRatingOrder, setCurRatingOrder] = useState(0);
  let [curPopularityOrder, setPopularityOrder] = useState(0);
  let [noOfElems, setNoofElems] = useState(2);
  let [curPage, setCurPage] = useState(1)
  // delete movie/
  const deleteMovie = (id) => {
    const restodftheMovies = movies.filter((movie) => {
      return movie.id != id;
    })
    setmovies(restodftheMovies);
  }

  useEffect(() => {
    let temp = movies.map((movie) => genreids[movie.genre_ids[0]])
    temp = new Set(temp)
    setgenres(["All Genres", ...temp]);
  }, [])

  const onCurGenre = (genre)=>{
    setCurrentgenre(genre);
    setCurPage(1);
  }
  // search something
  // let searchedMovies = searchItem == "" ? movies : movies.filter((movie) => {
  //   let movieName = movie.title || movie.name;
  //   let lowerCharsearch = searchItem.toLowerCase();
  //   return movieName.toLowerCase().includes(lowerCharsearch);
  // });
  // const searchFilter = (e) =>{
  //   setSearchItem(e.target.value)
  //   let searchedMovies = e.target.value.trim() == "" ? SampleMovies : SampleMovies.filter((movie) => {
  //     let movieName = movie.title || movie.name;
  //     let lowerCharsearch = e.target.value.trim().toLowerCase();
  //     return movieName.toLowerCase().indexOf(lowerCharsearch) !== -1;
  //   });
  //   setmovies(searchedMovies);
  // }
  let searchedMovies = searchItem == ""? movies : movies.filter((movie)=>{
    let movieName = movie.title || movie.name;
    let lowerCharSearch = searchItem.toLowerCase();
   return movieName.toLowerCase().includes(lowerCharSearch);});
  // map a searched movies -> searched
  // filter genre
  let filteredMovies = curGenre == "All Genres" ? searchedMovies : 
  searchedMovies.filter((searchedMovie)=>{
    return genreids[searchedMovie.genre_ids[0]]==curGenre;
  })

  // Sorting
  if(curRatingOrder!= 0){
   if(curRatingOrder==1){
    filteredMovies = filteredMovies.sort((movieA,movieB)=>{
       return movieA.vote_average - movieB.vote_average;
    })
   }else if(curRatingOrder== -1){
    filteredMovies = filteredMovies.sort((movieA,movieB)=>{
      return movieB.vote_average - movieA.vote_average;
    })}
  }
  // Popularity
  if(curPopularityOrder!= 0){
    if(curPopularityOrder==1){
     filteredMovies = filteredMovies.sort((movieA,movieB)=>{
        return movieA.popularity- movieB.popularity;
     })
    }else if(curPopularityOrder== -1){
     filteredMovies = filteredMovies.sort((movieA,movieB)=>{
       return movieB.popularity - movieA.popularity;
     })}
   }
  // Pagenation
  let si = (noOfElems)*(Number(curPage)-1);
  let ei = Number(noOfElems) + Number(si)
  let maxPageNum = Math.ceil(filteredMovies.length/noOfElems)
  filteredMovies = filteredMovies.slice(si,ei);

  const onPrev = (pageNum)=>{
    if(pageNum>0){
      setCurPage(pageNum);
    }
  }
  const onNext = (pageNum)=>{
    if(pageNum <= maxPageNum){
      setCurPage(pageNum);
    }
  }
  return (
    <div>
      <div className='mt-4 space-x-2 flex justify-center'>
        {genres.map((genre) => {
          return (
            <button className={genre == curGenre ? `py-1 px-2 bg-purple-900  rounded-lg font-bold text-white`: 
            `py-1 px-2 bg-purple-900  rounded-lg font-bold text-white hover:bg-gray-900`}
            onClick={()=>{onCurGenre(genre)}}
            >
              {genre}
            </button>
          )
        })}
      </div>
      <div className='mt-4 space-x-5 flex justify-center'>
        <input type='text' placeholder='SEARCHBAR' className='border-2 py-1 px-2 text-center'
          value={searchItem}
          onChange={(e)=>{ setSearchItem(e.target.value)
            setCurPage(1); }}
        ></input>
        <input type='number' placeholder='' className='border-2 py-1 px-2 text-center ' value={noOfElems}
        onChange={(e)=>{
          setNoofElems(e.target.value)
          setCurPage(1);
        }}></input>
      </div>
      <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">NAME</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                <div className='flex space-x-3'>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                  onClick={()=>{setCurRatingOrder(1);}}></img>
                  <div>RATING</div>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                  onClick={()=>{setCurRatingOrder(-1)}}></img>
                </div>
              </th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">
                <div className='flex space-x-3'>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png"
                  onClick={()=>{setPopularityOrder(1)}}></img>
                  <div>POPULARITY</div>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png"
                  onClick={()=>{setPopularityOrder(-1)}}></img>
                </div></th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">GENRE</th>
              <th scope="col" class="px-6 py-4 font-medium text-gray-900">REMOVE</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100 border-t border-gray-100">

            {filteredMovies.map((movie) => {
              // {console.log(movie)} 
              return (
                <tr class="hover:bg-gray-50" key={movies.id}>
                  <th class="flex items-center  px-6 py-4 font-normal text-gray-900 space-x-2">
                    <img
                      class="h-[6rem] w-[6rem] rounded object-fit"
                      src={`https://image.tmdb.org/t/p/original/t/p/w500/${movie.poster_path}`}
                      alt=""
                    />
                    <span class="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                    <div class="text-sm">
                      <div class="font-medium items-center text-gray-700">{movie.title || movie.name}</div>
                    </div>
                  </th>
                  <td class="px-6 py-4 pl-12">
                    {movie.vote_average.toFixed(2)}

                  </td>
                  <td class="px-6 py-4">{movie.popularity.toFixed(2)}</td>
                  <td class="px-6 py-4">
                    <div class="flex gap-2">
                      <span
                        class="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-semibold text-green-600"
                      >
                        {genreids[movie.genre_ids[0]]}
                      </span>

                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <span
                      class="inline-flex items-center gap-1 rounded-full bg-gray-50 px-2 py-1 text-xs font-semibold text-red-600 cursor-pointer"
                      onClick={() => { deleteMovie(movie.id) }}>
                      DELETE
                    </span>
                  </td>
                </tr>
              )

            })}

          </tbody>
        </table>
      </div>

      <PageNation
      pageNum={curPage}
      onPrev={onPrev}
      onNext={onNext} />
    </div>
  )
}

export default Favourites

