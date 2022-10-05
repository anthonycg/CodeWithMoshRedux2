import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
    console.log("store changed!", store.getState());
});

// state = reducer(state, action)
// notify the subscribers

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugAdded("Bug 2"));

store.dispatch(bugRemoved(2));
store.dispatch(bugResolved(1));

console.log(store);
