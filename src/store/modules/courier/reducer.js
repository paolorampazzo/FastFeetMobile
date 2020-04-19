import produce from 'immer';

const INITIAL_STATE = {
  signed: false,
  loading: false,
  id: '',
  user: {},
};

export default function load(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@courier/SIGN_IN_MOBILE_REQUEST':
      return produce(state, (draft) => {
        draft.id = action.payload.id;
        draft.loading = true;
      });
    case '@courier/SIGN_IN_MOBILE_SUCCESS':
      return produce(state, (draft) => {
        draft.signed = true;
        draft.id = action.payload.user.id;
        draft.user = action.payload.user;
        draft.loading = false;
      });
    case '@courier/SIGN_IN_MOBILE_FAILURE':
      return produce(state, (draft) => {
        draft.signed = false;
        draft.id = '';
        draft.user = '';
        draft.loading = false;
      });
    case '@courier/SIGN_OUT_MOBILE':
      return produce(state, (draft) => {
        draft.signed = false;
        draft.id = '';
        draft.user = '';
        draft.loading = false;
      });

    default:
      return state;
  }
}
