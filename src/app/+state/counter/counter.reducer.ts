import { Action, createReducer, on } from "@ngrx/store";
import { CounterState } from "./counter-state.interface";
import { CounterActions, Increment } from "./counter.action";
export const initialState: CounterState = {
    count: 0
}

// export function counterReducerOld(state = initialState, action: any) {
//     switch (action) {
//         case CounterActions.Increment: {
//             const count = state.count + 1;
//             return { ...state, count }
//         }
//         case CounterActions.Decrement: {
//             const count = state.count - 1;
//             return { ...state, count }
//         }
//         default:
//             break;
//     }
// }

const _counterReducer = createReducer(initialState,
    on(Increment, (state: CounterState) => {
        const count = state.count + 1;
        return { ...state, count }
    })
)

export function counterReducer(state: any, action: Action) {
    return _counterReducer(state, action);
}