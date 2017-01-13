 import {createStore,combineReducers,applyMiddleware}  from "redux";
 import createLogger from 'redux-logger';
 import ReduxThunk from "redux-thunk";
 import promiseMiddleware from 'redux-promise';
 import { createAction } from 'redux-actions';


 const logger = createLogger();


 var plus=(state = 0, action)=>{
     // console.log(action)

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
        // console.log(action)
     switch (action.type) {
         case 'INCREMENT':
             return state + 1
         case 'DECREMENT':
             return state - 1
         default:
             return state
     }
 }

 var selfFun=function(){
     return next=>action=>{
         // console.log("传入的action",action)
         debugger
         return next(action)
     }
 };

 function callTraceMiddleware ({dispatch,getState}){
     return next=> action =>{
         debugger
         return "enenenenen"
         console.trace();
         return next(action);
     }
 }


 var x=applyMiddleware(selfFun,callTraceMiddleware);


var rootReducer=combineReducers({plus,dec})

var store=createStore(rootReducer);

 store.subscribe(()=>{
    console.log("triggered")


 });




 function actionCreater(){
        console.log("fun发送完毕")
        // debugger
 }
console.log("准备dispatch fun")
 // var m=store.dispatch({type:111,payload:(new Promise((resolve,reject)=>{
 //     setTimeout(()=>{
 //       resolve("promise结束")
 //     },4000)
 // }))});
 //
 // m.then((end)=>{
 //    alert(end.payload)
 // });

// var e= store.dispatch({type:"any",payload:"huhai"});
//  console.log(e)


 var o=createAction("increa",()=>[1,2,3]);
 console.log(o)