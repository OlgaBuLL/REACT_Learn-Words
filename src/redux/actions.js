export const postAction = (newPost) => ({
  type: "POST_ACTION",
  payload: newPost,
});
export const getWordsCollection = (dictionary) => ({
  type: "GET_WORDSCOLLECTION",
  payload: dictionary,
});
export const deleteAction = (delWord) => ({
  type: "DELITE_ACTION",
  payload: delWord,
});
export const updateAction = (updateWord) => ({
  type: "UPDATE_ACTION",
  payload: updateWord,
});
