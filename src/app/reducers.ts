import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

// actions
export const emailForm = (email: string) => ({
  type: "CHANGE_EMAIL_FORM",
  payload: email,
});

export const passwordForm = (password: string) => ({
  type: "CHANGE_PASSWORD_FORM",
  payload: password,
});

export const changeUserName = (userName: string) => ({
  type: "CHANGE_USERNAME",
  payload: userName,
});

export const signIn = () => ({
  type: "SIGN_IN",
  payload: true,
});

export const signOut = () => ({
  type: "SIGN_OUT",
  payload: false,
});

export const initialState = {
  authForm: {
    email: "",
    password: "",
    userName: "",
  },
  auth: { user: undefined, isSignIn: false },
};

export type stateType = typeof initialState;

// reducer
export const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  switch (action.type) {
    // sign-in form
    case "CHANGE_EMAIL_FORM":
      return { ...state, email: action.payload };
    case "CHANGE_PASSWORD_FORM":
      return { ...state, password: action.payload };
    case "CHANGE_USERNAME":
      return { ...state, userName: action.payload };
    // auth
    case "SIGN_IN":
      return {
        ...state,
        user: action.payload.user,
        isSignIn: action.payload.isSignIn,
      };
    case "SIGN_OUT":
      return {
        ...state,
        user: null,
        isSignIn: action.payload.isSignIn,
      };
    default:
      return state;
  }
};

let store: any;

const initStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger))
  );
};

export const initializeStore = (preloadedState: stateType) => {
  // if store is null or undefined, return initStore(preloadedState)
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") {
    return _store;
  }
  // Create the store once in the client
  if (!store) {
    store = _store;
  }

  return _store;
};

export const useStore = (initialState: stateType) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
