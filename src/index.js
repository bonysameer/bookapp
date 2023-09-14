import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
// import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import About from "./pages/About/About";
import BookList from "./components/Booklist/Booklist";
import BookDetails from "./components/Bookdetails/Bookdetails";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  
);



// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import './index.css';
// import {BrowserRouter , Routes, Route} from 'react-router-dom';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Booklist from './components/Booklist/Booklist';
// import Bookdetails from './components/Bookdetails/Bookdetails'
// // import App from './App';
// // import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//     <Routes>
//       <Route path='/home' elememt = {<Home/>}></Route>
//       <Route path='about' elememt = {<About/>}></Route>
//       <Route path='book' elememt = {<Booklist/>}></Route>
//       <Route path='book/:id' elememt = {<Bookdetails/>}></Route>
//     </Routes>
  
//   </BrowserRouter>
// );




