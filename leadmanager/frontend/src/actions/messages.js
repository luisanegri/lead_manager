import { CREATE_MESSAGE, GET_ERRORS } from './types';

// not doing assynchronous call so no need to dispatch anything
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};

export const returnErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    // pass an object with msg and status
    payload: { msg, status }
  };
};
