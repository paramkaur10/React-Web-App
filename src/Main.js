import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';



export default class Main extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
     post1: [],
     post2: [],
     post3: []
    };
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3deadf3311754f4f8029353be9b227c3')
.then(data => data.json())
.then(data => {
  console.log(data);
  this.setState({
   post1:data.articles[0],
   post2:data.articles[1],
   post3:data.articles[2]
  });
})
   }

  render(){
     return(

        <main>
            <div>
                <Link to={'/Blogpost1'}> <h1>{this.state.post1.title}</h1>/ </Link>
               <p>Date: 23rd November 2019</p>
               <div className='summary'>
                  <img src={this.state.post1.urlToImage} className='textImage'/>
                  <p className='text'>{this.state.post1.description}</p>
                  </div>
                <Link to={'/Blogpost2'}> <h1>{this.state.post2.title}</h1> </Link>
                 <p>Date: 23rd November 2019</p>
                 <div className='summary'>
                  <img src={this.state.post2.urlToImage} className='textImage'/>
                  <p className='text'>{this.state.post2.description}</p>
               </div>
                <Link to={'/Blogpost3'}> <h1>{this.state.post3.title}</h1> </Link>
               <p>Date: 23rd November 2019</p>
               <div className='summary'>
                  <img src={this.state.post3.urlToImage} className='textImage'/>
                  <p className='text'>{this.state.post3.description}</p>
               </div>
               </div>
       </main>

   );
   }
}
