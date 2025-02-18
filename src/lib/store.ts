import authReducer from "@/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
})

// Infer the type of store
export type AppStore = ReturnType<typeof store.getState>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
