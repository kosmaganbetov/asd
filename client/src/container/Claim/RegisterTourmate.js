import travel from "../../assets/images/Travel.png";
import "./RegisterTourmate.sass";
const RegisterTourmate = () => {
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
        <button>Оставить заявку</button>
      </div>
    </div>
  );
};
export default RegisterTourmate;
