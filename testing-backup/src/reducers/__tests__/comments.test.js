import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New comment"]);
});

it("handles action with unknown type", () => {
  const newState = commentsReducer([], {});
  // This is fine as well
  // const newState = commentsReducer([], { type: 'sdjshdgjk' });

  expect(newState).toEqual([]);
});
