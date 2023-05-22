import UPDATE from "../redux/UPDATE.js";
import { updateAction } from "../redux/action.js";

function updateWordAndApi(updatedWord) {
  return function (dispatch) {
    UPDATE(updatedWord)
      .then(() => dispatch(updateAction(updatedWord)))
      .catch((error) => console.error(error));
  };
}

export default updateWordAndApi;
