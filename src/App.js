import { Route, BrowserRouter, Routes } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Logger from "./Logger"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Header" element={<Header/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Logger" element={<Logger/>}/>
      </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
