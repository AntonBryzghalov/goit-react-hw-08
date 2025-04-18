export const selectUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;
export const selectLoggedIn = (state) => state.auth.isLoggedIn;
export const selectAuthRefreshing = (state) => state.auth.isRefreshing;
export const selectAuthLoading = (state) => state.auth.isLoading;
