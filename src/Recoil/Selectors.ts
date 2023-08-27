import { selector } from "recoil";
import { isAuthenticatedAtom } from "./atoms";

export const CheckAuth = selector({
    key: 'checkAuth', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const authenticated = get(isAuthenticatedAtom);
  
      return authenticated;
    },
});