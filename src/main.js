 import {createStore,combineReducers}  from "redux";


 var plus=(state = 0, action)=>{

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

     switch (action.type) {
         case 'INCREMENT':
             return state + 1
         case 'DECREMENT':
             return state - 1
         default:
             return state
     }
 }



var rootReducer=combineReducers({plus,dec})

 console.log(rootReducer)
var store=createStore(rootReducer);

 store.subscribe(()=>{
    console.log("triggered")
 });


 store.dispatch({type:"INCREMENT"})

