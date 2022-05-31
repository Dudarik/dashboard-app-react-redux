const ADD_FILTER = "ADD_FILTER";
const REMOVE_FILTER = "REMOVE_FILTER";
const CLEAR_FILTER = "CLEAR_FILTER";

const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});
const removeFilter = (filter) => ({
  type: REMOVE_FILTER,
  filter,
});

const clearFilter = { type: CLEAR_FILTER };

export {
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTER,
  addFilter,
  removeFilter,
  clearFilter,
};
