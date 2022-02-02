import { Links, Meta } from "../interfaces/pagination.interfaces";
import { User } from "../interfaces/user.interfaces";
import { UserActionTypes } from "../types/users.types";

export interface UsersState {
  loading: boolean;
  users: User[];
  links: Links;
  pagination: Meta;
  user: User;
  showDeleteUser: boolean;
}

export const USER_INITIAL_STATE: UsersState = {
  loading: false,
  users: [],
  links: {
    first: "",
    last: "",
    prev: "",
    next: "",
  },
  pagination: {
    current_page: 0,
    from: 0,
    last_page: 0,
    links: [],
    path: "",
    per_page: 0,
    to: 0,
    total: 0,
  },
  user: {
    name: "",
    lastName: "",
    surName: "",
    birthday: "",
    rfc: "",
  },
  showDeleteUser: false,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: UserActionTypes
): UsersState => {
  switch (action.type) {
    case "getUsers":
    case "deleteUser":
      return {
        ...state,
        loading: true,
      };
    case "getUsersSuccess":
      return {
        ...state,
        loading: false,
        users: action.payload.data,
        links: action.payload.links,
        pagination: action.payload.meta,
      };
    case "httpError":
      return {
        ...state,
        loading: false,
      };
    case "deleteUserSuccess":
      return {
        ...state,
        loading: false,
        users: state.users.filter((user) => user.id !== action.payload.id),
        showDeleteUser: false,
        pagination: {
          ...state.pagination,
          to: state.pagination.to - 1,
          total: state.pagination.total - 1,
        },
      };
    case "showDeleteUser":
      return {
        ...state,
        showDeleteUser: action.payload,
      };
    case "setUSer":
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
