/**
 * Created by huhai on 2016/12/25.
 */
var data = [
    {id: 1, author: "Pete Hunt", text: "This is one comment"},
    {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];


var  externalMixin={
    componentDidMount(){
        console.log("我是来自external的mixin")
    }
}

var  externalMixin22={
    componentDidMount(){
        console.log("我是来自external22的mixin");
        setTimeout(()=>{
            // alert("hah")
        },100)
    }
}
var React=require("react"),
        ReactDOM=require("react-dom");
var CommentBox = React.createClass({

    getInitialState(){

        return {name:"胡海"}
    },
    propTypes(){
    name: React.PropTypes.number
    },
    getDefaultProps() {
        return {
            name: 'Mary'
        };
    },
    mixins:[externalMixin,externalMixin22],
    componentDidMount(){
        setTimeout(function() {
            this.setState({name: "张三"})
        }.bind(this),2000)
    },
    render() {
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
    <CommentBox any={data}/>,
    document.getElementById('content')
);