import axios from 'axios';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';
import { createMessage, returnErrors } from './messages';

// GET LEADS
export const getLeads = () => dispatch => {
  axios
    .get('/api/leads/')
    .then(res => {
      // dispatch get leads action to the reducer
      dispatch({
        // this will fire the reducer GET_LEADS
        type: GET_LEADS,
        // leads that return from the server
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD
export const deleteLead = id => dispatch => {
  axios
    .delete(`/api/leads/${id}/`)
    .then(res => {
      dispatch(
        createMessage({
          deleteLead: 'Lead Deleted'
        })
      );
      dispatch({
        // this will fire the reducer DELETE_LEAD
        type: DELETE_LEAD,
        // lead that return from the server
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD LEAD
export const addLead = lead => dispatch => {
  axios
    .post('/api/leads/', lead)
    .then(res => {
      dispatch(
        createMessage({
          addLead: 'Lead Added'
        })
      );
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
