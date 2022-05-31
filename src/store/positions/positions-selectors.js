const selectAllPositions = (state) => state.positions;

const selectVisiblePositions = (state, filters = []) =>
  state.positions.filter((pos) => {
    const posFilter = [pos.role, pos.level, ...pos.languages, ...pos.tools];

    return filters.every((filter) => posFilter.includes(filter));
  });

export { selectAllPositions, selectVisiblePositions };
