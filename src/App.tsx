//Importing Styles
import './App.scss';
//Importing dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Importing Components
import Nav from './components/Nav/Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {/* <Route path = "/" element = {<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
