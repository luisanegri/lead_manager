import { CREATE_MESSAGE } from './types';

// not doing assynchronous call so no need to dispatch anything
export const createMessage = msg => {
  return {
    type: CREATE_MESSAGE,
    payload: msg
  };
};
