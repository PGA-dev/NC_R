import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../features/promotions/promotionsSlice';
import { userReducer } from '../features/user/userSlice';
import { counterReducer, counterSlice } from '../features/counter/counterSlice';

export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        user: userReducer,
        counter: counterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
