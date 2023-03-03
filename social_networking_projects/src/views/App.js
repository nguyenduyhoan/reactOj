import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';
import Home from '../store/Home';
import Nav from './Nav/Nav';
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from "react-axios";


import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Switch,
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <Nav />
          {/* <img src={logo} className="App-logo" alt="logo" />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}


          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/Todos">
              <ListTodo />
            </Route>
            <Route >
             
            </Route>
          </Switch>

        </header>
        {/* <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
