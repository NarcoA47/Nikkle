import { atom } from "recoil";

export const isAuthenticatedAtom = atom<boolean>({
    key: 'isAuthenticated', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
  });