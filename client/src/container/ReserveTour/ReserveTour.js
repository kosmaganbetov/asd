import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AuthButton from "../../components/Authentication/AuthButton/AuthButton";
import AuthForm from "../../components/Authentication/AuthForm/AuthForm";
import Container from "../../components/UI/Container/Container";
import AuthButtonGoogle from "../../components/Authentication/AuthButtonGoogle/AuthButtonGoogle";
import "./ReserveTour.sass";
import ReservedTourCard from "../../components/ReserveTour/ReservedTourCard/ReservedTourCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchTour } from "../../store/actions/toursActions";
const ReserveTour = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tour = useSelector((state) => state.tours.tour);
  useEffect(() => {
    dispatch(fetchTour(params.id));
  }, []);

  return (
    <div className="ReserveTour__wrapper">
      <Container>
        <div className="ReserveTour">
          <div className="Register">
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
          </div>
          <ReservedTourCard
            tourmateImg={
              "http://localhost:8000/uploads/" + tour?.tourmateID?.image
            }
            img={"http://localhost:8000/uploads/" + tour?.image}
            tourTitle={tour.title}
            tourmateName={tour?.tourmateID?.name}
            tourmateSurname={tour?.tourmateID?.surname}
            tourDate="1 ноября"
            touristNumber={1}
            tourPrice={tour?.price}
            tourServices={tour.moreservices}
            tourFullPrice={tour?.price}
          />
        </div>
      </Container>
    </div>
  );
};

export default ReserveTour;
