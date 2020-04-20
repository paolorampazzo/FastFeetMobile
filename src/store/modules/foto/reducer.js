import produce from 'immer';

const INITIAL_STATE = {
  id: null,
};

export default function recipient(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@foto/SUCCESS':
      return produce(state, (draft) => {
        draft.id = action.payload.id;
        console.tron.log(draft.id);
      });
    default:
      return state;
  }
}
