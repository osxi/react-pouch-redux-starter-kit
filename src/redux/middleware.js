export const logger = store => next => action => {
  let result = next(action);

  console.log('[DISPATCH] ', action);
  console.log('[STATE] ', Object.keys(store.getState()));

  return result;
};
