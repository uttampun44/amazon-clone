import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Shop from './Components/Shop/Shop';
import Fashionhome from './Components/Shop/Fashion/FashionHome';
import Fitness from './Components/Shop/Fitness/Fitness';
import Personal from './Components/Shop/PersonalCare/Personal'
import Addtocart from './Components/Addtocart/Addtocart';
 import Error from './Components/404/Error';
import cartStore from './redux/Store';
import { Provider } from 'react-redux';


function App() {
  return (
   <Provider store={cartStore}>
   <BrowserRouter>
      <div className="App">
        <Routes>
               <Route exact path='/' element={<Home />}> </Route>
               <Route exact path='/login' element={<Login />}></Route>
               <Route exact path='/signup' element={<Signup />}></Route>
               <Route exact path='/shop' element={<Shop />}>
               <Route exact path='fashionhome' element={<Fashionhome/>} />
               <Route exact path='fitness' element={<Fitness/>} />
               <Route exact path='personalcare' element={<Personal/>} />
               </Route>
                <Route exact path='/addtocart/:id' element={<Addtocart />}></Route>
                <Route export path='*' element={<Error />}></Route>
          </Routes>
      </div>
    </BrowserRouter>
   </Provider>
  );
}

export default App;
