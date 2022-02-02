import { Dispatch } from "react";
import { backendApi } from "../api/backendApi";
import { UserResponse, UsersResponse } from "../interfaces/user.interfaces";
import { UsersState } from "../reducers/userReducer";
import { UserActionTypes } from "../types/users.types";

export interface UseUserProps {
  getUsers: (path: string, params?: Object) => void;
  deleteUser: (id: number) => void;
  handleOpenDeleteUser: (id: number) => void;
  handleCloseDeleteUser: () => void;
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

  const deleteUser = async (id: number) => {
    try {
      dispatch({ type: "deleteUser" });
      const response = await backendApi.delete<UserResponse>(`/user/${id}`);
      dispatch({ type: "deleteUserSuccess", payload: response.data.data });
    } catch (error) {
      dispatch({ type: "httpError" });
    }
  };

  const handleOpenDeleteUser = (id: number) => {
    const payload = state.users.find((user) => user.id === id);

    if (payload) {
      dispatch({ type: "setUSer", payload });
      dispatch({ type: "showDeleteUser", payload: true });
    }
  };

  const handleCloseDeleteUser = () => {
    dispatch({ type: "showDeleteUser", payload: false });
  };

  return {
    getUsers,
    deleteUser,
    handleOpenDeleteUser,
    handleCloseDeleteUser,
  };
};
