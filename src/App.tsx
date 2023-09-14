import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import routes from "./routes";
import {BrowserRouter, Routes, Route, useLocation, useNavigate} from 'react-router-dom'
import Error from './views/Error';
import {RootState, store} from './store'
import { Provider, useSelector } from 'react-redux';
const App:React.FC =()=> {

  const containerClassName = useSelector(
    (state: RootState) => state.container.value
  );
  const [container, setContainer] = useState('');
  useEffect(()=>{
    setContainer(containerClassName)
  },[])

  console.log(process.env.REACT_APP_PUBLIC_URL)
  return (
  <Provider store={store}>
    <BrowserRouter basename={process.env.REACT_APP_PUBLIC_URL}>
    {/* <BrowserRouter > */}
    <div className={`inner-container ${container}`} id="inner-container">
      <Routes >
        {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            <Route path="*" element={<Error />} />
      </Routes>
      </div>
   </BrowserRouter>
  </Provider>
  );
}

export default App;
