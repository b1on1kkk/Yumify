export const INITIAL_STATE = {
  email: "",
  password: ""
};

export enum LoginActionKind {
  EMAIL = "EMAIL",
  PASSWORD = "PASSWORD"
}

interface LoginAction {
  type: LoginActionKind;
  payload: string;
}

export interface LoginState {
  email: string;
  password: string;
}

export function loginReducer(state: LoginState, action: LoginAction) {
  const { type, payload } = action;

  switch (type) {
    case LoginActionKind.EMAIL:
      return {
        ...state,
        email: payload
      };

    case LoginActionKind.PASSWORD:
      return {
        ...state,
        password: payload
      };

    default:
      return state;
  }
}
