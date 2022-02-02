import { User, UsersResponse } from "../interfaces/user.interfaces";

export type UserActionTypes =
  | { type: "getUsers" }
  | { type: "getUsersSuccess"; payload: UsersResponse }
  | { type: "storeUser" }
  | { type: "deleteUser" }
  | { type: "deleteUserSuccess"; payload: User }
  | { type: "setUSer"; payload: User }
  | { type: "showDeleteUser"; payload: boolean }
  | { type: "httpError" };
