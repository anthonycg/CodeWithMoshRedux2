import store from "./store";

const unsubscribe = store.subscribe(() => {
    console.log("store changed!", store.getState());
});

store.dispatch({
    type: "bugAddd",
    payload: {
        description: "Bug1",
    },
});

unsubscribe();

store.dispatch({
    type: "bugRemove",
    payload: {
        id: 1,
    },
});

console.log(store);
