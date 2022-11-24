import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/Authentication/AuthButton/AuthButton";
import AuthForm from "../../components/Authentication/AuthForm/AuthForm";
import Container from "../../components/UI/Container/Container";
import FormInput from "../../components/UI/FormInput/FormInput";

const RegisterEmail = () => {
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  return (
    <div className="Register">
      <Container>
        <AuthForm
          title="Зарегистрироваться"
          info="Создайте аккаунт, чтобы добавлять туры в избранное и иметь доступ к своим бронированиям с любого устройства."
          redirectText="Уже есть аккаунт?  "
          redirectLink="Войти"
          redirectLinkPath="/login"
        >
          <FormInput
            placeholer="Имя"
            value={registerState.name}
            onChange={(e) =>
              setRegisterState({ ...registerState, name: e.target.value })
            }
          />
          <AuthButton
            onClick={() => {
              navigate("/register/email");
            }}
          >
            Создать аккаунт
          </AuthButton>
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
