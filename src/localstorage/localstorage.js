export const loadState = () => {
  try {
    const serialState = localStorage.getItem("appState");
    if (serialState === null) {
      return {
        selectedItems: [],
        itemsCounter: 0,
        total: 0,
        checkout: false,
      };
    }
    return JSON.parse(serialState);
  } catch (err) {
    return null;
  }
};

export const saveState = (state) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("appState", serialState);
  } catch (err) {
    console.log(err);
  }
};
