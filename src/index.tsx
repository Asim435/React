import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardDesign } from './Components/To_Do_List/TaskScheduling';
import Movies from './Components/Movies/movies';
import Rooter from './Components/Router/Rooter';
import { Weather } from './Components/weather/Weather';
import { Loader } from './Components/weather/Loader';
import Calculator from './Components/Calculator/Calculator';
import Task from './Components/Task/Task';
import CrudOperation from './Components/CrudOperation/CrudOperation';
import { StopWatch } from './Components/stopWatch/StopWatch';
import ToolBar from './Components/Context/ToolBar';
import { themeContext } from './Components/Context/Context';
import { Reducer } from './Components/Reducer/Reducer';
import ReduxExp from './Components/ReduxImplementation/ReduxExp';
import MyIntro from './Components/Intro/MyIntro';
import { Provider } from 'react-redux';
import { store } from './Components/ReduxImplementation/store';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(

  <React.StrictMode>


   <MyIntro/>



    {/* 
    <themeContext.Provider value={'dark'}>


      <ToolBar />


    </themeContext.Provider> */}




    {/* <StopWatch /> */}
    {/* <CrudOperation /> */}
    {/* <Rooter /> */}
    {/* {<Loader />} */}
    {/* <CardDesign /> */}
    {/* <Matching /> */}
    {/* <Rooter /> */}
    {/* <Movies /> */}
    {/* <CardDesign /> */}
    {/* <Calculator /> */}
    {/* <Task /> */}
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
