export const INITIAL_VALIDATION_STATE = {
  emailError: false,
  nicknameError: false,
  passwordError: false,
  passwordDoubleError: false
};

export enum SignActionValidityKind {
  VALIDATE_EMAIL = "VALIDATE_EMAIL",
  VALIDATE_NICKNAME = "VALIDATE_NICKNAME",
  VALIDATE_PASSWORD = "VALIDATE_PASSWORD",
  VALIDATE_DOUBLE_PASSWORD = "VALIDATE_DOUBLE_PASSWORD"
}

export interface SignValidityState {
  emailError: boolean;
  nicknameError: boolean;
  passwordError: boolean;
  passwordDoubleError: boolean;
}

export interface SignValidityAction {
  payload: {
    text: string;
    key: string;
  };
}

export function signValidityReducer(
  state: SignValidityState,
  action: SignValidityAction
) {
  const { payload } = action;

  switch (payload.key) {
    case SignActionValidityKind.VALIDATE_EMAIL:
      return {
        ...state,
        emailError:
          payload.text.includes("@") && payload.text.includes(".")
            ? false
            : true
      };

    case SignActionValidityKind.VALIDATE_NICKNAME:
      return {
        ...state,
        nicknameError: payload.text.length === 0 ? true : false
      };

    case SignActionValidityKind.VALIDATE_PASSWORD:
      return {
        ...state,
        passwordError: payload.text.length === 0 ? true : false
      };

    case SignActionValidityKind.VALIDATE_DOUBLE_PASSWORD:
      return {
        ...state,
        passwordDoubleError: payload.text.length === 0 ? true : false
      };
    default:
      return state;
  }
}
