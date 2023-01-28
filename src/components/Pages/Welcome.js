import classes from './Welcome.module.css';

import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { authAction } from '../storeRedux/authReducer';
import { Link } from 'react-router-dom';
import Inbox from '../Email/Inbox';
import { Button } from 'react-bootstrap';


const Welcome = () => {
  const dispatch=useDispatch()

  const logoutHandler =()=>{
    dispatch(authAction.logout());
  }

  return (
    <Fragment>
      <div>Inbox</div>
    
<Button onClick={logoutHandler}>logout</Button>
<Link to='/send'>Compose Email</Link>
<Inbox/>
    </Fragment>
  )
}

export default Welcome