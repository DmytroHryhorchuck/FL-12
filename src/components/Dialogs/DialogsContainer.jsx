
import { addMessegeActionCreater, updateNewTextMessegeActionCreater } from "../Redux/dialogs-reducer";
import Dialogs from '../Dialogs/Dialogs'
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
return {
messegesPage: state.messegesPage
}
}
let mapDispatchToProps = (dispatch)=>{
  return {
    updateNewTextMessege: (text)=>{
        dispatch(updateNewTextMessegeActionCreater(text))
    },
    addMessege:()=>{
        dispatch(addMessegeActionCreater())
    }
}  
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer