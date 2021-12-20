// import reducer from './reducer';
import store from './store'; 
import {bugAdded, bugRemoved, bugResolved} from './actions'
// import * as actions from './actionTypes'

// const unsubscribe = store.subscribe(()=> { //! we do subscribe to notify about store changes
//     console.log("store changed", store.getState());
// })


// store.dispatch({
//     type: actions.BUG_ADDED,
//     payload: {
//         description: "bug1"
//     }
// })

// unsubscribe() //! we do unsubscribe before rermoving because no need to notify about removing bugs


// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }

// })

store.dispatch(bugAdded("bug 1"));
store.dispatch(bugResolved(1));

console.log(store.getState());


// !=========== redux flow ====================
// state = reducer(state, action);
// notify the subscribers

// 1- dispatch an action 
// 2- the store will call a reducer
// 3- the reducer will get the "the initial state" and the "action we want to dispatch"
// 4- based on the type of the action we will get the new state and
// 5- 