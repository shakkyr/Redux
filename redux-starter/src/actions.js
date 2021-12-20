import * as actions from './actionTypes'

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
        payload: {
            description: description // or just weite description
        }
})
export const bugRemoved = id => ({
    type: actions.BUG_REMOVED,
        payload: {
            id
        }
})
export const bugResolved = id => ({
    type: actions.BUG_RESOLVED,
        payload: {
            id
        }
})




// export function bugAdded(description){
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: "bug1"
//         }
//     }
// }
// export function bugRemoved(description){
//     return {
//         type: actions.BUG_REMOVED,
//         payload: {
//             id: 1
//         }
//     }
// }