export type Action = { type: "ADD_INPUTSEARCH"; payload: string };

export const addNote = (search: string): Action => ({
  type: "ADD_INPUTSEARCH",
  payload: search,
});