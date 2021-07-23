import classes from './Form.module.css'
import classes_card from '../globalCSS/Card.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {formActions} from '../store/form-Slice'
import { useHistory} from 'react-router-dom';
const Form = () => {
    const history = useHistory();
    const  nameAndSurname=useSelector(state=>state.form.nameAndSurname)
    const  email=useSelector(state=>state.form.email)
    const  textArea=useSelector(state=>state.form.textArea)

    const dispatch=useDispatch()
    
    const returnHandler=()=>{
        dispatch(formActions.clearForm())
        history.push("/");
    }
    return (
        <div className={classes_card.card} style={{ height: '700px' }}>
            <div className={classes.formstyle}>
                <h1> Form summary</h1>
                <h4> Name and Surname: {nameAndSurname}</h4>
                <h4> Email: {email}</h4>
                <h4> Text: {textArea}</h4>
                <button className={classes_card.next} onClick={returnHandler}>return</button> 
            </div>
        </div>
    )
}
export default Form