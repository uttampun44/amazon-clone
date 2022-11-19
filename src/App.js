import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Shop from './Components/Shop/Shop';
import Fashion from './Components/Shop/Fashion/Fashion';
import Fitness from './Components/Shop/Fitness/Fitness';
import Personal from './Components/Shop/PersonalCare/Personal'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
            <Route exact path='/' element={<Home />}> </Route>
            <Route exact path='/login' element={<Login />}></Route>
            <Route exact path='/signup' element={<Signup />}></Route>
            <Route exact path='/shop' element={<Shop />}>
            <Route path='fashion' element={<Fashion/>} />
            <Route path='fitness' element={<Fitness/>} />
            <Route path='personalcare' element={<Personal/>} />
            </Route>
           
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
