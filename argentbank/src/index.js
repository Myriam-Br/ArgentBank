import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import '../src/designs/css/main.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from '../src/Pages/Home';
import SignIn from './Pages/SignIn';
import NoPage from './Pages/NoPage';
import RequireAuth from './Pages/PrivateRoutes';
import { Provider } from 'react-redux';
import store from "../src/features/store"
import Dashboard from './Pages/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>

  <Provider store={store}>
    <Header/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path='/profile' element={ <RequireAuth><Dashboard /></RequireAuth> }/>
        <Route path="*" element={<NoPage />} />
    </Routes>
    <Footer/>
  </Provider>
 
 
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
