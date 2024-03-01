export const INITIAL_STATE = {
  email: "",
  nickname: "",
  password: "",
  password_double: ""
};

export enum SignActionKind {
  EMAIL = "EMAIL",
  NICKNAME = "NICKNAME",
  PASSWORD = "PASSWORD",
  PASSWORD_DOUBLE = "PASSWORD_DOUBLE"
}

interface SignAction {
  type: SignActionKind;
  payload: string;
}

interface SignState {
  email: string;
  nickname: string;
  password: string;
  password_double: string;
}

export function signReducer(state: SignState, action: SignAction) {
  const { type, payload } = action;

  switch (type) {
    case SignActionKind.EMAIL:
      return {
        ...state,
        email: payload
      };

    case SignActionKind.PASSWORD:
      return {
        ...state,
        password: payload
      };

    case SignActionKind.NICKNAME:
      return {
        ...state,
        nickname: payload
      };

    case SignActionKind.PASSWORD_DOUBLE:
      return {
        ...state,
        password_double: payload
      };
    default:
      return state;
  }
}
