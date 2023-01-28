import classes from './Welcome.module.css';

import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux';
import { authAction } from '../storeRedux/authReducer';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const dispatch=useDispatch()

  const logoutHandler =()=>{
    dispatch(authAction.logout());
  }

  return (
    <Fragment>
      <div>Welcome</div>
<button onClick={logoutHandler}>logout</button>
<Link to='/send'>Compose Email</Link>
    </Fragment>
  )
}

export default Welcome