import { combineReducers } from "redux";
import user from "./user.js";
import contacts from "./contacts.js";

export default combineReducers({
  user: user,
  contacts: contacts
});