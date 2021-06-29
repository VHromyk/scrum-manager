export default {
  saveIn(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  },

  getOut(key) {
    const elemList = localStorage.getItem(key);
    const parsedElemList = JSON.parse(elemList);
    return parsedElemList;
  },

  clear(key) {
    localStorage.removeItem(key);
  },
};
