import './App.css';
import React, { Component } from 'react'
import News from './Components/News';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

// import {
//   BrowserRouter as Router,
//   Route,
//   Switch,
// } from "react-router-dom";



export default class App extends Component {

  apikey=process.env.REACT_APP_NEWS_KEY;

  state={
    progress:0,
  }

  setprogress=(progress)=>{
    this.setState({progress:progress});
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
            style={{ marginTop: '55px' }}
          />
          <Routes>
            <Route exact path="/" element={<News setprogress={this.setprogress} apikey={this.apikey}  key="general" pageSize={8} country="in" category="general" />} />
            <Route exact path="/business" element={<News setprogress={this.setprogress} apikey={this.apikey} key="business" pageSize={8} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setprogress={this.setprogress} apikey={this.apikey} key="entertainment" pageSize={8} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setprogress={this.setprogress} apikey={this.apikey} key="general" pageSize={8} country="in" category="general" />} />
            <Route exact path="/health" element={<News setprogress={this.setprogress} apikey={this.apikey} key="health" pageSize={8} country="in" category="health" />} />
            <Route exact path="/science" element={<News setprogress={this.setprogress} apikey={this.apikey} key="science" pageSize={8} country="in" category="science" />} />
            <Route exact path="/sports" element={<News setprogress={this.setprogress} apikey={this.apikey} key="sports" pageSize={8} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News setprogress={this.setprogress} apikey={this.apikey} key="technology" pageSize={8} country="in" category="technology" />} />
          </Routes>
        </Router>

      </div>
    )
  }
}


