export interface InputSearchState {
    inputSearch: string[];
  }
  
  const initialState = {
    inputSearch: [],
  };
  
  type Action = {
    type: "ADD_INPUTSEARCH";
    payload: string;
  };
  
  export const inputSearchReducer = (
    state: InputSearchState = initialState,
    action: Action
  ) => {
    switch (action.type) {
      case "ADD_INPUTSEARCH":
        return { ...state, inputSearch: [...state.inputSearch, action.payload] };
      default:
        return state;
    }
  };