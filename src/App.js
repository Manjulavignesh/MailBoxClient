import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import WelcomePage from './Components/WelcomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Login/>}/>
      <Route path="/WelcomePage" element={<WelcomePage/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
