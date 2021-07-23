import { configureStore } from '@reduxjs/toolkit';

import formReducer from './form-Slice'
import timeReducer from './time-Slice'

const store = configureStore({
    reducer:{form:formReducer,time:timeReducer}
});
export default store;
