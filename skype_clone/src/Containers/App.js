import React from "react";
import Sidebar from "../Components/Sidebar.js";
import Main from "../Components/Main.js";
import "../Styles/App.css";
import store from '../Store/index.js'
// convertimos objeto obtenido api generadora aleatorios en array para 
// poder iterarlo con lodash
import _ from "lodash"

const App = () => {
  const { contacts, user, activeUserId } = store.getState();

 //alert(user);

  //console.log("CONTACTOS",contacts);
  //console.log(typeof arrayContactos);
  //console.log(contacts);
  return (
    <div className="App">
      {/* convertimos el objeto contacts a array para poder iterarlo más adelante */}
      <Sidebar contacts={_.values(contacts)}/>

      <Main user={user} activeUserId={activeUserId}/>
    </div>
  );
};

export default App;
