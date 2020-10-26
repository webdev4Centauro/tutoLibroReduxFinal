import { SET_TYPING_VALUE, SEND_MESSAGE } from "../Constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "REDUCERTYPING";
    default:
      return state;
  }
}
