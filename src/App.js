import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Fitness from './Components/Fitness/Fitness';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
            <Route path='/' element={<Home />}> </Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/fitness' element={<Fitness />}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
