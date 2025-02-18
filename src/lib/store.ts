import authReducer from "@/features/auth/authSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = () => {
	return configureStore({
		reducer: {
			auth: authReducer,
		},
	});
};

// Infer the type of store
export type AppStore = ReturnType<typeof store>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
