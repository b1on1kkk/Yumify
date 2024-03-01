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

import { checkValidation } from "../../utils/checkValidation";
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
      title="Регистрация"
      submit_button_title="Зарегистрироваться"
      link="/login"
      before_link_text="Уже зарегистрированы?"
      link_text="Войдите"
      onSubmit={(e) => {
        e.preventDefault();
        checkValidation(
          Object.values(state),
          Object.values(SignActionValidityKind),
          setValidation
        );

        if (
          !Object.values(validation).includes(true) &&
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
        title="Никнейм"
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
        title="Пароль"
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

      <Input
        title="Пароль ещё раз"
        type="password"
        id="password-double-input"
        error_status={validation.passwordDoubleError}
        onChange={(e) =>
          dispatch({
            type: SignActionKind.PASSWORD_DOUBLE,
            payload: e.target.value
          })
        }
        value={state.password_double}
        onBlur={() =>
          setValidation({
            payload: {
              text: state.password_double,
              key: SignActionValidityKind.VALIDATE_DOUBLE_PASSWORD
            }
          })
        }
      />
    </Wrapper>
  );
}
