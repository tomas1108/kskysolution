import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { combineReducers } from 'redux';
import { REDUCER_KEY } from '~/@types/redux';
import connectionSlice from './connectionSlice';

const rootReducer = combineReducers({
  [REDUCER_KEY.CONNECTION]: connectionSlice
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
