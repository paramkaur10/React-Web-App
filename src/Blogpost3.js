import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';



export default class Blogpost3 extends React.Component{
   constructor(props) {
    super(props);
    this.state = {
     post3: []
    };
  }
  componentDidMount(){
    fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=3deadf3311754f4f8029353be9b227c3')
.then(data => data.json())
.then(data => {
  console.log(data);
  this.setState({
   post3:data.articles[2]
  });
})
   }

  render(){
     return(

        <main>
            <div>
               <div className='summary'>
                  <img src={this.state.post3.urlToImage} className='textImage'/>
                  <p className='text'>{this.state.post3.description}</p>
               </div>
               </div>
       </main>

   );
   }
}
