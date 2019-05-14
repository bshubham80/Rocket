export const ACTION_SET_FIRST_NAME = 'user:ActionSetFirstName';
export const ACTION_SET_LAST_NAME = 'user:ActionSetLastName';

export const setFirstName = name => ({
  type: ACTION_SET_FIRST_NAME,
  payload: {
    name,
  },
});

export const setLastName = name => ({
  type: ACTION_SET_LAST_NAME,
  payload: {
    name,
  },
});
