import { getMessages } from "../static-data.js";
import { SEND_MESSAGE } from "../Constants/action-types.js"

export default function messages(state = getMessages(20), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return "";
    default:
      return state;
  }
}
