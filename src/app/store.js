import { configureStore } from '@reduxjs/toolkit';
import stateReducer from '../features/reducer/reducer';

export default configureStore({
  reducer: {
    stateRedux: stateReducer
  },
});
