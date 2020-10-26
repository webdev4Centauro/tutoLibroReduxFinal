import { SET_TYPING_VALUE, SEND_MESSAGE } from "../Constants/action-types";

export default function typing(state = "", action) {
  switch (action.type) {
    case SET_TYPING_VALUE:
      return action.payload;
    case SEND_MESSAGE:
      return "";// este return nos puede servir para setear un valor
                // al campo input de mensages en el chat
    default:
      return state;
  }
}
