import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/Authentication/AuthButton/AuthButton";
import AuthForm from "../../components/Authentication/AuthForm/AuthForm";
import Container from "../../components/UI/Container/Container";
import FormInput from "../../components/UI/FormInput/FormInput";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store/reducers/userReducer";
const RegisterEmail = () => {
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    role: "tourist",
  });
  const dispatch = useDispatch();
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(
      registerUser({
        userData: { ...registerState },
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
          info="Создайте аккаунт, чтобы добавлять туры в избранное и иметь доступ к своим бронированиям с любого устройства."
          redirectText="Уже есть аккаунт?  "
          redirectLink="Войти"
          redirectLinkPath="/login"
        >
          <FormInput
            placeholder="Имя"
            value={registerState.name}
            onChange={(e) =>
              setRegisterState({ ...registerState, name: e.target.value })
            }
          />
          <FormInput
            placeholder="Фамилия"
            value={registerState.lastname}
            onChange={(e) =>
              setRegisterState({ ...registerState, lastname: e.target.value })
            }
          />
          <FormInput
            placeholder="Email"
            value={registerState.email}
            type="email"
            onChange={(e) =>
              setRegisterState({ ...registerState, email: e.target.value })
            }
          />
          <FormInput
            placeholder="Пароль"
            value={registerState.password}
            type="password"
            onChange={(e) =>
              setRegisterState({ ...registerState, password: e.target.value })
            }
          />
          <AuthButton type="submit">Создать аккаунт</AuthButton>
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

export default RegisterEmail;
