import {createStore,compose} from 'redux'
const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
const formReducer=(state={selectedDepartment:'',nameAndSurname:'',email:'',textArea:''},action )=>{
    if(action.type==='selectDepartment'){
        return {
            selectedDepartment:action.department,
        }
    }
    if(action.type==='submitForm'){
        return {
            nameAndSurname:action.nameAndSurname,
            email:action.email,
            textArea:action.textArea
        }
    }
    if(action.type==='clearForm'){
        return {
            selectedDepartment:'',
            nameAndSurname:'',
            email:'',
            textArea:''
        }
    }

    return state
}

const store = createStore(formReducer,enhancers);
export default store;
