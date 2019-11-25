import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';



export default class Blogpost2 extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
     post2: []
    };
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3deadf3311754f4f8029353be9b227c3')
.then(data => data.json())
.then(data => {
  console.log(data);
  this.setState({
   post2:data.articles[1]
  });
})
   }

  render(){
     return(

        <main>
            <div>
                <h1>{this.state.post2.title}</h1>
                 <p>Date: 23rd November 2019</p>
                 <div className='summary'>
                  <img src={this.state.post2.urlToImage} className='textImage'/>
                  <p className='text'>{this.state.post2.description}</p>
                 </div>
               </div>
       </main>

   );
   }
}
