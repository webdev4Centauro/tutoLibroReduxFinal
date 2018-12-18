import { getMessages } from "../static-data.js";

export default function messages(state = getMessages(20), action) {
  return state;
}
