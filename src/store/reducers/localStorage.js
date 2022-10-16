export const loadFromLocalStorage = (name) => {
  try {
    const serializedStore = window.localStorage.getItem(name);
    if (serializedStore === null) return false;
    const data = JSON.parse(serializedStore);
    if (!data.authorized) return false;
    return data.authorized;
  } catch (e) {
    // console.log('Error loading from local storage:', e);
    return false;
  }
};

export const saveToLocalStorage = (name, data) => {
  try {
    window.localStorage.setItem(name, JSON.stringify(data));
    return data;
  } catch (e) {
    // console.log('Error saving to local storage:', e);
    return null;
  }
};

export const deleteFromLocalStorage = (name) => {
  try {
    window.localStorage.removeItem(name);
    return true;
  } catch (e) {
    // console.log('Error deleting from local storage:', e);
    return false;
  }
};
