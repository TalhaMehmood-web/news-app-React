
import './App.css';

import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const  App = ()=> {

  const [progress, setProgress] = useState(0);
 return (
      <div>
        <Router>
      <NavBar/>
      <LoadingBar
        color='white'
        progress={progress}
      
      />
      <Switch>
      <Route exact path="/"><News setProgress = {setProgress}  key="general" pageSize = {9} country = "us" category = "general"/></Route>
      <Route exact path="/business"><News setProgress = {setProgress}  key="business" pageSize = {9} country = "us" category = "business"/></Route>
      <Route exact path="/entertainment"><News setProgress = {setProgress}  key="entertainment" pageSize = {9} country = "us" category = "entertainment"/></Route>
      <Route exact path="/general"><News setProgress = {setProgress}  key="general" pageSize = {9} country = "us" category = "general"/></Route>
      <Route exact path="/health"> <News setProgress = {setProgress}  key="health" pageSize = {9} country = "us" category = "health"/></Route>
      <Route exact path="/science"><News setProgress = {setProgress}  key="science" pageSize = {9} country = "us" category = "science"/></Route>
      <Route exact path="/sports"> <News setProgress = {setProgress}  key="sports" pageSize = {9} country = "us" category = "sports"/></Route>
      <Route exact path="/technology"><News setProgress = {setProgress}  key="technology"  pageSize = {9} country = "us" category = "technology"/></Route>
        </Switch>
      </Router>
      </div>
  );
  
}
export default App;
