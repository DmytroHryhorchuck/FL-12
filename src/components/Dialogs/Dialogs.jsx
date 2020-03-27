import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from '../Dialogs/DialogItem/DialogsItem';
import Messege from '../Dialogs/Messege/Messege';

const Dialogs = (props) => {

    let state = props.messegesPage;
    let dialogsElements = state.dialogs.map(i => <DialogItem name={i.name} id={i.id}/>)
    let messegeElements = state.messeges.map(i => <Messege messege={i.messege}/>)
    let newMessegeText = state.newMessegeBody

    let onSendMessegeClick = ()=>{
        props.addMessege()
        }
    let onNewMessegeChange = (event)=>{ 
        let text = event.target.value;
        props.updateNewTextMessege(text)
    }
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={styles.messeges}>
                <div>{messegeElements}</div>
                <div>
                    <div><textarea value={newMessegeText} onChange={onNewMessegeChange} placeholder='Enter your messege'></textarea></div>
                    <div>
                        <button onClick={onSendMessegeClick}>Send messege</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs