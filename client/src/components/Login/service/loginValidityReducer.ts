export const INITIAL_VALIDATION_STATE = {
  emailError: false,
  passwordError: false
};

export enum LoginActionValidityKind {
  VALIDATE_EMAIL = "VALIDATE_EMAIL",
  VALIDATE_PASSWORD = "VALIDATE_PASSWORD"
}

export interface LoginValidityState {
  emailError: boolean;
  passwordError: boolean;
}

export interface LoginValidityAction {
  payload: {
    text: string;
    key: string;
  };
}

export function loginValidityReducer(
  state: LoginValidityState,
  action: LoginValidityAction
) {
  const { payload } = action;

  switch (payload.key) {
    case LoginActionValidityKind.VALIDATE_EMAIL:
      return {
        ...state,
        emailError:
          payload.text.includes("@") && payload.text.includes(".")
            ? false
            : true
      };

    case LoginActionValidityKind.VALIDATE_PASSWORD:
      return {
        ...state,
        passwordError: payload.text.length === 0 ? true : false
      };
    default:
      return state;
  }
}
