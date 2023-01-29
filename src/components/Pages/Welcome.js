import classes from './Welcome.module.css';

import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { authAction } from '../storeRedux/authReducer';
import { Link } from 'react-router-dom';
import Inbox from '../Email/Inbox';
import { Button } from 'react-bootstrap';
import SentBox from '../Email/SentBox';


const Welcome = () => {
  const dispatch=useDispatch()

  const logoutHandler =()=>{
    dispatch(authAction.logout());
  }

  return (
    <Fragment>
      <div className={classes.main}>
        <div className={classes.header}>
          <div className={classes.welcome}>Welcome to Mail Box</div>
          <Link to='/send' style={{textDecoration:'none'}}>Compose Email</Link>
          <Link to='/inbox' style={{textDecoration:'none'}}>Inbox</Link>
          <Link to='/sentbox' style={{textDecoration:'none'}}>Sentbox</Link>
          <Button onClick={logoutHandler}>Logout</Button>
        </div>
      </div>
      
    </Fragment>
  )
}

export default Welcome

