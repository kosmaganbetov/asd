import { useNavigate } from "react-router-dom";
import travel from "../../assets/images/Travel.png";
import "./RegisterTourmate.sass";
const RegisterTourmatePromo = () => {
  const navigate = useNavigate();
  return (
    <div className="RegisterTourmate">
      <div className="RegisterTourmate_image">
        <img src={travel} />
      </div>
      <div className="RegisterTourmate_account">
        <p className="RegisterTourmate_account_create">
          Аккаунт успешно создан
        </p>
        <p className="RegisterTourmate_account_claim">
          Оставьте заявку чтобы стать турмейт
        </p>
        <button
          onClick={() => {
            navigate("/register-tourmate");
          }}
        >
          Оставить заявку
        </button>
      </div>
    </div>
  );
};
export default RegisterTourmatePromo;
