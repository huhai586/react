 import {createStore}  from "redux";


function reducer(state=0,action){
    if(action.type="any"){
        return ++state
    }
}


var store=createStore(reducer);

 store.subscribe(()=>{
    console.log("triggered")
 });


 store.dispatch({type:"any"})