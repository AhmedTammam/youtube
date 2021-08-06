import { configureStore } from '@reduxjs/toolkit';
import videosReducer from './reducers';

export const store = configureStore({
    reducer: {
        videos: videosReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
