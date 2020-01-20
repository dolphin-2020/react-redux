const defaultStore = {
  inputVal: '',
  displayList: [],
  completeList: [],
}

export default (state = defaultStore, action) => {

  if (action.type === 'change_input_value') {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputVal = action.value;
    return newState;
  };
 
  if (action.type === "add_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    if (newState.inputVal === '') {
      alert("Are you kidding me?")
    } else {
      const newState = JSON.parse(JSON.stringify(state));
      newState.displayList.unshift(newState.inputVal);
      newState.inputVal = '';
      return newState;
    }
  }

  if (action.type === "delete_todo_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.displayList.splice(action.index, 1);
    return newState;
  }

  if (action.type === "add_complete_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.completeList.unshift(newState.displayList[action.index]);
    newState.displayList.splice(action.index, 1);
    return newState;
  }
  
  if (action.type === "delete_complete_item") {
    const newState = JSON.parse(JSON.stringify(state));
    newState.completeList.splice(action.index, 1);
    return newState;
  }

  return state;
}