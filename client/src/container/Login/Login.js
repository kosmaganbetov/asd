import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/Authentication/AuthButton/AuthButton";
import AuthForm from "../../components/Authentication/AuthForm/AuthForm";
import Container from "../../components/UI/Container/Container";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/reducers/userReducer";
import FormInput from "../../components/UI/FormInput/FormInput";
const Login = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      loginUser({
        userData: { ...loginState },
        navigate,
      })
    );
  };
  return (
    <div className="Register">
      <Container>
        <AuthForm
          onSubmit={submitHandler}
          title="Зарегистрироваться"
          info="Войдите, чтобы добавлять туры в избранное и просматривать заказы с любого устройства."
          redirectText="Уже есть аккаунт?  "
          redirectLink="Войти"
          redirectLinkPath="/login"
        >
          <FormInput
            placeholder="Email"
            value={loginState.email}
            type="email"
            onChange={(e) =>
              setLoginState({ ...loginState, email: e.target.value })
            }
          />
          <FormInput
            placeholder="Пароль"
            value={loginState.password}
            type="password"
            onChange={(e) =>
              setLoginState({ ...loginState, password: e.target.value })
            }
          />
          <AuthButton type="submit">Войти</AuthButton>
          <p className="Register__conf_policy">
            Создавая аккаунт, вы принимаете «Публичную оферту» и «Политику
            конфиденциальности».
          </p>
          <hr className="Register__space" />
        </AuthForm>
      </Container>
    </div>
  );
};

export default Login;
