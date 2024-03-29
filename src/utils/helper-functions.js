import _ from 'lodash';

const LS_KEYS = {
  'user': 'wikiwhat_user'
};

export function setLocalStorage(key, value) {
  const lsKey = LS_KEYS[key];

  const date = new Date();
  const newVal = _.merge(value , { date });
  localStorage.setItem(lsKey, JSON.stringify(newVal));

  return newVal;
}

export function getLocalStorageItem(key) {
  const lsKey = LS_KEYS[key];
  const ls = localStorage.getItem(lsKey);

  return JSON.parse(ls);
}
