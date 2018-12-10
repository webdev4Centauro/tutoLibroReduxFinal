import { combineReducers } from "redux";
import user from "./user.js";
import contacts from "./contacts.js";
import activeUserId from "./activeUserId.js"

export default combineReducers({
  user: user,
  contacts: contacts,
  activeUserId: activeUserId
});