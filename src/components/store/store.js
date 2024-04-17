import { configureStore } from '@reduxjs/toolkit'; 
import alpineSlice from '../alpineSlice/alpineSlice';

export default configureStore({
    reducer: {
        alpine: alpineSlice
    }
});
