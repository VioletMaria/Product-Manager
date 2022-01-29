import React from 'react';
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
    
function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Route exact path="/product">
          <Main/>
        </Route>

        <Route exact path="/product/:_id">
          <Detail/>
        </Route>
        
        <Route exact path="/product/:_id/edit">
          <Update/>
        </Route>
      </BrowserRouter>
    </div>
  );
}
    
export default App;