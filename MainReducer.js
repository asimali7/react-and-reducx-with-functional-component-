const mainReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_INPUT":
      return [...state, action.value];
    case "INCREMENT":
      const list = [...state];
      const index = list.findIndex((e) => e.id === action.id);
      if ((index) => 0) {
        list[index].value++;
        return list;
      }
      return list;
    case "DECREMENT":
      const lists = [...state];
      const indexes = lists.findIndex((e) => e.id === action.id);
      if ((index) => 0) {
        lists[indexes].value--;
        return lists;
      }
      return lists;
    case "RESET":
      const reset = state.map((c) => {
        c.value = 0;
        return c;
      });
      return reset;
    case "DELETE":
      return state.filter((e) => e.id !== action.id);
    case "EDIT":
      const edit = [...state];
      edit.forEach((l) => {
        if (l.id === action.id) {
          l.editingmode = true;
        }
      });
      const data = [...edit];
      return data;
    case "SAVE":
      const save = [...state];

      save.forEach((e) => {
        if (e.id === action.id) {
          e.editingmode = false;
          e.inputValue = action.text;
        }
      });

      const datta = [...save];
      return datta;

    default:
      return state;
  }
};

export default mainReducer;
