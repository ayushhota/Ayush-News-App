// *********React 24***********
// from this we will start with class based component and before this we were doing function based component

// import './App.css';

// import React, { Component } from 'react'
// export default class App extends Component {  // to generate this we use "rcc" snippet 
//   a = 'Ayush';
//   render() {
//     return (
//       <div>
//         this is my first class based Component {this.a} {/* this is for class based component */}
//       </div>
//     )
//   }
// }



// *********React 25***********
// from this we will start with class based component and before this we were doing function based component

import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


// *********React 33***********
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


// *******React 38**************
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {  // to generate this snippet we used "rcc" 

  state = {
    progress: 0
  }
  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router basename='Ayush-News-App'>
          <Navbar />

          {/* ******React 38****** */}
          <LoadingBar
            height={3}
            color='#f11946'
            progress={this.state.progress}
          />

            <Routes>
              <Route exact path='/Ayush-News-App' element={<News setProgress={this.setProgress} key="general" pageSize={12} country="in" category='General' />}></Route>
              <Route exact path='/business' element={<News setProgress={this.setProgress} key="business" pageSize={12} country="in" category='Business' />}></Route>
              <Route exact path='/entertainment' element={<News setProgress={this.setProgress} key="entertainment" pageSize={12} country="in" category='Entertainment' />}></Route>
              <Route exact path='/general' element={<News setProgress={this.setProgress} key="general" pageSize={12} country="in" category='General' />}></Route>
              <Route exact path='/health' element={<News setProgress={this.setProgress} key="health" pageSize={12} country="in" category='Health' />}></Route>
              <Route exact path='/science' element={<News setProgress={this.setProgress} key="science" pageSize={12} country="in" category='Science' />}></Route>
              <Route exact path='/sports' element={<News setProgress={this.setProgress} key="sports" pageSize={12} country="in" category='Sports' />}></Route>
              <Route exact path='/technology' element={<News setProgress={this.setProgress} key="technology" pageSize={12} country="in" category='Technology' />}></Route>
            </Routes>
        </Router>
      </div >
    )
  }
}


// React 37 is pending which is infinite scroll function lecture
// And it is an important concept lecture 
