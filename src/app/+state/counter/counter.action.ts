import { createAction } from "@ngrx/store";


export const CounterActions = {
    Increment : '[Counter] Increment',
    Decrement : '[Counter] Decrement'
}


export const Increment = createAction('[Counter] Increment');
export const Decrement = createAction('[Counter] Decrement');