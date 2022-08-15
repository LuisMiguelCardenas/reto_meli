export type Action = { type: "ADD_INPUTSEARCH"; payload: string };

export const addInputSearch = (search: string): Action => ({
  type: "ADD_INPUTSEARCH",
  payload: search,
});