class LocalStorage {
    static set = (key, value) => localStorage.setItem(key, JSON.stringify(value))

    static get = (key) => {
      const item = localStorage.getItem(key);
      try {
        return JSON.parse(item);
      } catch (e) {
        return null;
      }
    }

    static remove = (key) => localStorage.removeItem(key)
}

export default LocalStorage;
