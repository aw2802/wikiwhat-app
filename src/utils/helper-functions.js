import _ from 'lodash';

export function setLocalStorage(key, value) {
  const date = new Date();

  localStorage.setItem(key, JSON.stringify(value));
}
