import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="border
        flex items-center
        space-x-9
        space-y-5
        pl-3 py-4">
       {/* <div className='header'>
       <h3>WELCOME TO IMDB : WEBSITE FOR MOVIES</h3>
       </div> */}
        <img src='https://i.pinimg.com/originals/b9/9f/48/b99f481c467442e62843eba54ad33fed.jpg'style={{width:"150px"}}></img>
        <button className='hover:scale-110 duration-300'>ALL</button>
        <input type='search' placeholder='SEARCHBAR' className='border-1 border-black rounded-xl text-center'></input>
       <div className='navtext'>
       <Link to= "/" className='hover:scale-110 duration-300'>MOVIES</Link>
        <Link to= "/fav" className='hover:scale-110 duration-300'>FAVOURITES</Link>

       </div>
    </div>
  )
}

export default NavBar