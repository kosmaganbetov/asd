import React from "react";
import { useNavigate } from "react-router-dom";
import AuthButton from "../../components/Authentication/AuthButton/AuthButton";
import AuthForm from "../../components/Authentication/AuthForm/AuthForm";
import Container from "../../components/UI/Container/Container";
import AuthButtonGoogle from "../../components/Authentication/AuthButtonGoogle/AuthButtonGoogle";
import "./Register.sass";
const Register = () => {
  const navigate = useNavigate();
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
          <AuthButtonGoogle />
          <AuthButton
            onClick={() => {
              navigate("/register/email");
            }}
          >
            Продолжить с электронной почтой
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

export default Register;
