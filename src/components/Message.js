import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchMessage } from '../redux/actions';

export default () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.message.message);
    const loading = useSelector(state => state.app.loading);
    if(loading) {
        return <p>Loading</p>
    }
    if(!messages.length) {
        return <button 
            onClick = {() => dispatch(fetchMessage())}>Загрузить сообщения</button>
    }
    console.log(messages)
    return messages.map(message => <h5 key={message.id}>{message.name}</h5>)
}
