import reducer from "./reducer";

function createStore(reducer) {
    let state;

    function getState() {
        return state;
    }

    function dispatch(action) {
        //call the reducer to get the new state
        state = reducer(state, action);
    }
    return {
        getState,
    };
}

export default createStore(reducer);

//this is how you set private properties that are housed in the store object. f getState on console
