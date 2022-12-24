export const setData = (name, data) => {
  return localStorage.setItem(name, JSON.stringify(data));
};
export const getData = (data) => {
  const result = localStorage.getItem(data);

  return JSON.parse(result);
};
export const removeData = (name) => {
  localStorage.removeItem(name);
};
export const clearData = () => {
  localStorage.clear();
};
