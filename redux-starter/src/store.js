import {createStore} from 'redux';
import reducer from './reducer'

const store = createStore(reducer) //passing reduser as an arrgument 

export default store;