// import {BUG_ADDED, BUG_REMOVED} from './actionTypes' //! if we had more actions and want a pretty code we can do the next
import * as actions from './actionTypes'



let lastId = 0;

// !========== switch Case ==================
export default
 function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];

        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id);

        case actions.BUG_RESOLVED:
            return state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved:true});


        default: return state;
    }
}


// !============= if Statement =============

// function reducer(state = [], action) {
//     if ( action.type === 'bugAdded')
//         return [
//             ...state,
//             {
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: false
//             }
//         ];
//         else if (action.type === 'bugRemoved')
//             return state.filter(bug => bug.id !== action.payload.id);

//         return state;
// }