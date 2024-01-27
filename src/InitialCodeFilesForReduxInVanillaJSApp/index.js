//We are running this app as a simple node JS app.

const redux = require("redux"); //This require("<package-name>") is a vanilla JS syntax.
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleWare = redux.applyMiddleware;
const bindActionCreators = redux.bindActionCreators;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE"; //We are doing this to define a string constant that indicates the type of the action. This is a good
//practice as by doing this we can avoid spelling mistakes in future while reusing the action.
const BUY_ICECREAM = "BUY_ICECREAM";

function buyCake() {
  //This function is an action creator which rturns an action.
  return {
    type: BUY_CAKE,
    info: "Redux action to buy cakes",
  };
}

function buyICeCream() {
  return {
    type: BUY_ICECREAM,
    info: "Redux action to buy icecreams",
  };
}

// const initialState = {
//   numOfCakes: 10,
//   numOfIceCreams: 20,
// };

const initialCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state, //By ...state we tell reducer to first make a copy of the state object and then modify only the below mentiond
//         //properties. In this example only the 'numOfCakes' property will be modified.
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAM:
//       return {
//         ...state,
//         numOfIceCreams: state.numOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    default:
      return state;
  }
};

//By using combineReducers method we can combine all the reducers and create one rootReducer, which we can pass within the createStore()
//method when creating the Redux store. The combineReducers method accepts an object.
//NOTE: When an action dispatches, all the reducers will get to know about the action, but only the action which is having the dispatched
//action type will be executed and all other reducers will ignore the dispatched action.
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

// const store = createStore(reducer);
const store = createStore(rootReducer, applyMiddleWare(logger));

console.log("Initial State: ", store.getState());

// const unsubscribe = store.subscribe(() =>
//   console.log("Updated State: ", store.getState())
// );
const unsubscribe = store.subscribe(() => {});

const actions = bindActionCreators({ buyCake, buyICeCream }, store.dispatch);

// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyICeCream());
// store.dispatch(buyICeCream());

actions.buyCake();
actions.buyCake();
actions.buyCake();
actions.buyICeCream();
actions.buyICeCream();

unsubscribe();
