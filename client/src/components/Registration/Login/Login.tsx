import { useReducer } from "react";

import Input from "../Input/Input";
import Wrapper from "../Wrapper/Wrapper";

import {
  INITIAL_STATE,
  LoginActionKind,
  loginReducer
} from "./service/loginReducer";
import {
  INITIAL_VALIDATION_STATE,
  LoginActionValidityKind,
  loginValidityReducer
} from "./service/loginValidityReducer";

import { checkValidation } from "../../../utils/checkValidation";
import axios from "axios";

import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);
  const [validation, setValidation] = useReducer(
    loginValidityReducer,
    INITIAL_VALIDATION_STATE
  );

  async function loginAPIRequest() {
    try {
      await axios.post(
        "http://localhost:3000/registration/login",
        {
          email: state.email,
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
      title="Log in"
      submit_button_title="Log in"
      link="/sign"
      before_link_text="Do not have an account yet?"
      link_text="Sign up!"
      onSubmit={(e) => {
        e.preventDefault();
        checkValidation(
          Object.values(state),
          Object.values(LoginActionValidityKind),
          setValidation
        );

        if (
          !Object.values(validation).includes(true) &&
          !Object.values(state).includes("")
        ) {
          loginAPIRequest();
        }
      }}
    >
      <Input
        title="E-mail"
        type="email"
        id="email-input"
        error_status={validation.emailError}
        onChange={(e) =>
          dispatch({ type: LoginActionKind.EMAIL, payload: e.target.value })
        }
        value={state.email}
        onBlur={() =>
          setValidation({
            payload: {
              text: state.email,
              key: LoginActionValidityKind.VALIDATE_EMAIL
            }
          })
        }
      />

      <Input
        title="Пароль"
        type="password"
        id="password-input"
        error_status={validation.passwordError}
        onChange={(e) =>
          dispatch({ type: LoginActionKind.PASSWORD, payload: e.target.value })
        }
        value={state.password}
        onBlur={() =>
          setValidation({
            payload: {
              text: state.password,
              key: LoginActionValidityKind.VALIDATE_PASSWORD
            }
          })
        }
      />
    </Wrapper>
  );
}
