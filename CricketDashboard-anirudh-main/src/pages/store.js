import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CoachRegisterSlice from '../pages/Redux/Coach/CoachRegistration/CoachRegistrationSlice'
import cricketerAuthSlice from '../pages/Redux/Cricketer/CricketerAuthSlice'
import matchSlice from '../pages/Redux/TrainingModule/TrainingModuleSlice'

// Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

// Combine reducers
const rootReducer = combineReducers({
  // user: userRegisterSlice,
  CoachRegister : CoachRegisterSlice,
  cricketer :cricketerAuthSlice,
  match:matchSlice
  });

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false,
    }),
});

export const persistor = persistStore(store); 
export default store;
