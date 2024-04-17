import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar/Nav';
import ImageSlider from './components/Slider/imageSlider.jsx';
import Acc from './components/acc/acc.jsx';
import Info from './components/info/info.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './components/navbar/Test.jsx';
import Configure from './components/configure/configure.jsx';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Acc/>}/>
        <Route exact path="/configure" element={<Configure/>}/>     
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
