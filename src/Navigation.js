import React from "react";
import './App.css';
import index from "postcss-normalize";
export default class Navigation extends React.Component {
        constructor (props) {
        super (props);
        this.state={items:[]};
    }
    componentDidMount() {
        this.getcall();
        this.interval= setInterval(()=>{this.getcall();},5000);
    }
    getcall() {
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3deadf3311754f4f8029353be9b227c3')
            .then(data=>data.json())
            .then(data=>{console.log(data);
            this.setState({items:data.articles});})

    }
    render() {
        return (
            <nav>
            <p>
                <a href="/" > home </a>
            </p>
                {
                    this.state.items.map((data,index)=>{
                        return(
                            <div key={index}>
                            <p> TITLE:{data.title}</p>
                                <img src={data.urlToImage}/>
                            </div>
                        )
                    })
                }
            </nav>);
    }
}