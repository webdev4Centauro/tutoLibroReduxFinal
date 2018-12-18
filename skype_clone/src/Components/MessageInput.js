import React from "react";
import store from "../Store/index.js";
import { setTypingValue } from "../Actions/index.js";
import "../Styles/MessageInput.css";

const MessageInput = ({ value }) => {
  const handleChange = e => {
    store.dispatch(setTypingValue(e.target.value));
  };

  return (
    <form className="Message">
      <input
        className="Message__input"
        onChange={handleChange}
        value={value}
        placeholder={"Write a message"}
      />
    </form>
  );
};

export default MessageInput;
