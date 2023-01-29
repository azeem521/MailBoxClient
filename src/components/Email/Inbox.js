import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { mailSliceAction } from '../storeRedux/emailReducer';
import classes from './Inbox.module.css'

const Inbox = () => {
    const dispatch=useDispatch();
    const mailInInbox=useSelector(state=>state.mail.mails);
    const myEmail=localStorage.getItem('email').replace(/['@','.']/g,'');

    let data=[];

    useEffect(()=>{
        const fetchDaata=async()=>{
            const reponse=await fetch(`https://book-search-app-62511-default-rtdb.firebaseio.com/inbox/${myEmail}.json`);

            const mailData=await reponse.json();
            console.log('useEffectcalled', mailData);
            for(let key in mailData){
                data=[{id:key,...mailData[key]},...data]
            }

            dispatch(mailSliceAction.updateInbox(data))
          
        }
        fetchDaata();
    },[])
    console.log(data,'data');
  return (
    <div className={classes.main}>
       {mailInInbox.length>0 ?
  (<div className={classes.row}>
            {

                mailInInbox.map((item)=>(
                    <div className={classes.row1} key={item.id}>
                    <div className={classes.user}>From :- {item.sender}</div>
            <div className={classes.subject}>{item.subject}</div>
            <div className={classes.msg}>
                <NavLink to={`/message/${item.id}`} style={{textDecoration:'none'}}>{'{message}'}</NavLink>
            </div>
           {item.dot && <div className={classes.dot}>
            {/* //dot logic */}
            </div>}
            </div>
                ))

            }
        </div>) : <p>Inbox is empty</p>}
       
    </div>
  )
}

export default Inbox