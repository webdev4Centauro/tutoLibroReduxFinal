import React from "react";
import User from "../Containers/User.js";
import "../Styles/Sidebar.css";
import { Component } from "react";
//import  {contacts}  from "./static_data";

//const Sidebar=({contacts:{persons}})=>{
const Sidebar = ({ contacts }) => {
  //console.log("ContactosAntesMap",contacts)
    //console.log("SIDEBARLOG",persons);
  return (
    <aside className="Sidebar">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  );
};

class Appa extends Component {
  constructor(preps) {
    super(preps);
    this.state = {}
   }
 }

export default Sidebar;
