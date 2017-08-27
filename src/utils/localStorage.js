export const loadState = (name) => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state, name) => {
  try {
    const serializedState = JSON.stringify({
      state,
      timestamp: new Date().getTime()
    });
    localStorage.setItem(name, serializedState);
  } catch (err) {
    // Ignore errors
  }
};
