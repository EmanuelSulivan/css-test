import { Dispatch } from "react";
import { backendApi } from "../api/backendApi";
import { UsersResponse } from "../interfaces/user.interfaces";
import { UsersState } from "../reducers/userReducer";
import { UserActionTypes } from "../types/users.types";

export interface UseUserProps {
  getUsers: (path: string, params?: Object) => void;
}

export const useUser = (
  state: UsersState,
  dispatch: Dispatch<UserActionTypes>
): UseUserProps => {
  const getUsers = async (path: string, params?: Object) => {
    try {
      dispatch({ type: "getUsers" });
      const response = await backendApi.get<UsersResponse>(path, { params });
      dispatch({ type: "getUsersSuccess", payload: response.data });
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  return {
    getUsers,
  };
};
