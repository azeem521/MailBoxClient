
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/Pages/SignUp';
import Welcome from './components/Pages/Welcome';
import {useSelector} from 'react-redux'
import ForgotPassword from './components/Pages/ForgotPassword';
import Send from './components/Email/Send';
import ReadMsg from './components/Email/ReadMsg';

function App() {

  const isAuth=useSelector(state=>state.auth.isAuthenicate)
  console.log(isAuth);
  return (
    <Fragment>
      <Routes>
        
      <Route path='/' element={isAuth ? <Welcome /> : <SignUp />}></Route>
      {/* <Route path='/welcome' element={isAuth ? <Welcome /> : <SignUp />} /> */}
      <Route path='/forgotPassword' element={!isAuth ? <ForgotPassword /> : <Welcome />} />
      <Route path='/send' element={isAuth ? <Send /> : <SignUp />} />
      <Route path='/message/:id' element={isAuth ? <ReadMsg /> : <SignUp />} /> 
      </Routes>
      </Fragment>
  );
}

export default App;
