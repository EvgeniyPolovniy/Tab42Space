import { loadState, saveState } from '../utils/localStorage';

const Tab42Space = 'Tab42SpaceLocal';
const localState = loadState(Tab42Space);
const initialState = localState.state || [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_COIN_LIST': {
      const newState = action.list;
      saveState(newState, Tab42Space);
      return newState;
    }
    default: {
      return state;
    }
  }
};