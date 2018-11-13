import React from "react";
import Sidebar from "../Components/Sidebar.js";
import Main from "../Components/Main.js";
import "../Styles/App.css";
import store from '../Store/index.js'
// Used to convert objects to arrays
import _ from "lodash"

const App = () => {
  const { contacts } = store.getState();

  return (
    <div className="App">
      {/* Passing contacts as an array with the lodash method */}
      <Sidebar contacts={_.values(contacts)}/>
      <Main />
    </div>
  );
};

export default App;
