import { handleActions } from 'redux-actions';

import {
  SET_ALIAS,
  SET_URL,
  SET_KEYS,
  SET_UID,
  SET_CONFIG
} from 'actions/identity/config';

const defaultConfig = {
  privateKey: 'Not Yet Generated',
  publicKey: 'Not Yet Generated',
  alias: 'initial alias',
  uid: '123',
  url: 'ws://localhost:3000',
  relays: [
    'ws://mesh-relay-in-us-1.herokuapp.com',
    'ws://mesh-relay-in-us-2.herokuapp.com'
  ]
};

export default handleActions({
  [SET_ALIAS]: (state, action) => ({
    ...state,
    alias: action.payload
  }),
  [SET_URL]: (state, action) => ({
    ...state,
    url: action.payload
  }),
  [SET_KEYS]: (state, action) => ({
    ...state,
    ...action.payload
  }),
  [SET_UID]: (state, action) => ({
    ...state,
    uid: action.payload
  }),
  [SET_CONFIG]: (state, action) => ({
    ...action.payload
  })
}, defaultConfig);
