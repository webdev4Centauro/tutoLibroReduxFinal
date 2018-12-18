import React from "react";
import store from "../Store/index.js";
import Header from "./Header.js";
import Chats from "./Chats.js";
import _ from "lodash";
import '../Styles/ChatWindow.css'

const ChatWindow = ({ activeUserId }) => {
  const state = store.getState();
  const activeUser = state.contacts[activeUserId];
  const activeMessages = state.messages[activeUserId];

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      {/* Pass object as an array of values */}
      <Chats messages={_.values(activeMessages)}/>
    </div>
  );
};

export default ChatWindow;
