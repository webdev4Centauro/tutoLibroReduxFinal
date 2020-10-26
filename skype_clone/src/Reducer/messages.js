import { getMessages } from "../static-data.js";
import { SEND_MESSAGE } from "../Constants/action-types.js";
import _ from "lodash";

export default function messages(state = getMessages(20), action) {
  switch (action.type) {
    case SEND_MESSAGE:
      const { message, userId } = action.payload;
      const allUserMsgs = state[userId];
      const number = +_.keys(allUserMsgs).pop() + 1;
      return {
        ...state,
        [userId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true
          }
        }
      };
      
    default:
      return state;
  }
}
