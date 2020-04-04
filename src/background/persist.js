/* eslint-env browser, webextensions */
const STORE_KEY = 'REDUX_STORE_TEMP';

const onError = (e) => {
  console.error("persist.js", e);
  return e;
}

const isEmpty = (obj) => Object.keys(obj).length === 0 && obj.constructor === Object;

const hydrateState = (defaultState) => {
  return new Promise((resolve, reject) => {
    browser.storage.local.get(STORE_KEY)
      .then((storedState) => {
        if(isEmpty(storedState) || !(STORE_KEY in storedState)) {
          browser.storage.local.set({ [STORE_KEY]: defaultState})
          resolve(defaultState)
        } else {
          resolve(storedState[STORE_KEY]);
        }
      }).catch((err) => reject(onError(err)));
  });
};

const persistState = (state) => {
  browser.storage.local.set({ [STORE_KEY]: state });
}

export { hydrateState, persistState };
