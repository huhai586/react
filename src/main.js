 import {createStore,combineReducers,applyMiddleware}  from "redux";
 import createLogger from 'redux-logger';
 import ReduxThunk from "redux-thunk";
 const logger = createLogger();


 var plus=(state = 0, action)=>{
     console.log(action)

    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

 var dec=(state = 0, action)=>{
        console.log(action)
     switch (action.type) {
         case 'INCREMENT':
             return state + 1
         case 'DECREMENT':
             return state - 1
         default:
             return state
     }
 }
 var x=applyMiddleware(logger,ReduxThunk)


var rootReducer=combineReducers({plus,dec})

var store=createStore(rootReducer,x);

 store.subscribe(()=>{
    console.log("triggered")
 });




 function actionCreater(){
        console.log(arguments)
        debugger
 }

 var m=store.dispatch(actionCreater)
