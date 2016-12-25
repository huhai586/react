/**
 * Created by huhai on 2016/12/25.
 */
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


var React=require("react"),
        ReactDOM=require("react-dom");
var CommentBox = React.createClass({
    getInitialState:function(){

        return {name:"胡海"}
    },
    componentDidMount:function(){
        setTimeout(function() {
            this.setState({name: "张三"})
        }.bind(this),2000)
    },
    render: function() {
        return (
            <div className="commentBox">
            Hello, world! I am a CommentBox.
                我的名字叫做{this.state.name}
                <br/>
                下面遍历从props得到的数据
                {this.props.externalData && this.props.externalData.map(function(obj,index){
                    return <li key={index}>obj.author</li>
                })}
        </div>
        );
    }
});
ReactDOM.render(
<CommentBox  externalData={data}/>,
    document.getElementById('content')
);