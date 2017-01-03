/**
 * Created by huhai on 2016/12/25.
 */

import  React from "react";
import ReactDOM from "react-dom";

var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];




import style from "./css/style.sass";
// import  E  from "extract-text-webpack-plugin";

var CommentBox = React.createClass({

    getInitialState(){

        return {name:"胡海"}
    },
    propTypes:{
        // externalData: React.PropTypes.bool
    },
    getDefaultProps() {
        return {
            name: 'Mary'
        };
    },

    componentDidMount(){
        setTimeout(function() {
            this.setState({name: "张三22SDFASF2MMMMMFDFGDF"})
        }.bind(this),2000)
    },
    createMarkup(){ return {} },
    render() {
        return (
            <div className="commentBox">
                {

                    <div dangerouslySetInnerHTML={{__html:this.createMarkup()}} />

                }
                我的名字叫做 <div ref="name">{this.state.name}</div>
                <br/>
                下面遍历从props得到的数据
                {this.props.externalData && this.props.externalData.map(function(obj,index){

                    return <li key={index}>{obj.author}</li>
                })}
        </div>
        );
    }
});


ReactDOM.render(
    <CommentBox externalData={data} />,

    document.getElementById('content')
);



// Rest properties
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// Spread properties

let  n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }


var xx={a:1};
console.log({...xx,oo:6})
