// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Banner from './COMPONENTS/Banner';
import Movies from './COMPONENTS/Movies';
import NavBar from './COMPONENTS/NavBar';
import PageNation from './COMPONENTS/PageNation';
import Favourites from './COMPONENTS/Favourites';
import PagenotFound from './COMPONENTS/PagenotFound';
import { Provider } from 'react-redux';
import Store from './COMPONENTS/Redux/Store';
import Register from './COMPONENTS/Register';
import Login from './COMPONENTS/Login';



function App() {
  return (
    <div className="App ">
      <Provider store={Store}> 
     <BrowserRouter>
     <Routes>
      <Route path='/reg' element={
        <Register />
      }/>
      <Route path='/log' element={
        <Login/>
      }></Route>
      <Route path='/' element={
        <div>
          <NavBar />
          <Banner />
          <Movies />
        </div>
      }>
      </Route>
      <Route path='/fav' element={
        <div>
          <NavBar />
        <Favourites />
        </div>
      }>
        
      </Route>
        <Route path='*' element={ 
        <PagenotFound />
      }>
        </Route>
     </Routes>
     </BrowserRouter>
     </ Provider>
    </div>
  );
}

export default App;
