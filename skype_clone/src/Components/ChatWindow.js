import React from "react";
import store from "../Store/index.js";
import Header from "./Header.js";
import Chats from "./Chats.js";
import _ from "lodash";
import '../Styles/ChatWindow.css'
import MessageInput from './MessageInput.js'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];
  const {typing} = state;

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />

      {/*Convertimos el objeto activeMessages 
      a array para poder iterarlo mas tarde*/}
      
      <Chats messages={_.values(activeMessages)}/>
      <MessageInput value={typing}/>
    </div>
  );
};

export default ChatWindow;
