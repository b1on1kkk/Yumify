import { useReducer } from "react";

import Input from "../Input/Input";
import Wrapper from "../Wrapper/Wrapper";

import {
  INITIAL_STATE,
  SignActionKind,
  signReducer
} from "./service/signReducer";
import {
  INITIAL_VALIDATION_STATE,
  SignActionValidityKind,
  signValidityReducer
} from "./service/signValidityReducer";

import { checkValidation } from "../../../utils/checkValidation";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Sign() {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(signReducer, INITIAL_STATE);

  const [validation, setValidation] = useReducer(
    signValidityReducer,
    INITIAL_VALIDATION_STATE
  );

  async function signAPIRequest() {
    try {
      await axios.post(
        "http://localhost:3000/registration/user_create",
        {
          email: state.email,
          nickname: state.nickname,
          password: state.password
        },
        { withCredentials: true }
      );

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Wrapper
      title="Registration"
      submit_button_title="Sign up"
      link="/login"
      before_link_text="Have an account?"
      link_text="Log in!"
      onSubmit={(e) => {
        e.preventDefault();
        checkValidation(
          Object.values(state),
          Object.values(SignActionValidityKind),
          setValidation
        );

        if (
          !Object.values(validation).includes(true) &&
          !Object.values(state).includes("") &&
          state.password === state.password_double
        ) {
          signAPIRequest();
        }
      }}
    >
      <Input
        title="E-mail"
        type="email"
        id="email-input"
        error_status={validation.emailError}
        onChange={(e) =>
          dispatch({ type: SignActionKind.EMAIL, payload: e.target.value })
        }
        value={state.email}
        onBlur={() =>
          setValidation({
            payload: {
              text: state.email,
              key: SignActionValidityKind.VALIDATE_EMAIL
            }
          })
        }
      />

      <Input
        title="Nickname"
        type="text"
        id="name-input"
        error_status={validation.nicknameError}
        onChange={(e) =>
          dispatch({ type: SignActionKind.NICKNAME, payload: e.target.value })
        }
        value={state.nickname}
        onBlur={() =>
          setValidation({
            payload: {
              text: state.nickname,
              key: SignActionValidityKind.VALIDATE_NICKNAME
            }
          })
        }
      />

      <Input
        title="Password"
        type="password"
        id="password-input"
        error_status={validation.passwordError}
        onChange={(e) =>
          dispatch({ type: SignActionKind.PASSWORD, payload: e.target.value })
        }
        value={state.password}
        onBlur={() =>
          setValidation({
            payload: {
              text: state.password,
              key: SignActionValidityKind.VALIDATE_PASSWORD
            }
          })
        }
      />
    </Wrapper>
  );
}
