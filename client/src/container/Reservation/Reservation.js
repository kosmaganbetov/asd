import "./Reservation.sass";
const Reservation = () => {
  return (
    <div className="reservation">
      <div className="reservation_title">
        <h2>Выберите способ оплаты</h2>
      </div>
      <div className="reservation_country">
        <p>Выберите страну</p>
        <select placeholder="Select...">
          <option>Select...</option>
        </select>
      </div>
      <div className="reservation_credit">
        <div className="reservation_credit_card">
          <input type="radio" name="bank" />
          <label>Банковская карта</label>
        </div>
        <div className="reservation_card_number">
          <p>Номер карты</p>
          <input placeholder="XXXX-XXXX-XXXX-XXX" type="number" />
        </div>
        <div className="reservation_card">
          <div className="reservation_card_date">
            <p>Срок действительности</p>
            <input placeholder="mm/yy" />
          </div>
          <div className="reservation_card_date">
            <p>CVV</p>
            <input type={"password"} maxLength="3" placeholder="***" />
          </div>
        </div>
        <div className="reservation_name">
          <p>Имя держателя</p>
          <input placeholder="Асан Үсенов" />
        </div>
        <div className="reservation_save">
          <input type="checkbox" />
          <label>Сохранить карту</label>
        </div>
      </div>
      <div className="reservation_pay">
        <input type="radio" name="bank" />
        <label>Через приложение Kaspi.kz</label>
      </div>
      <div className="reservation_pay">
        <input type="radio" name="bank" />
        <label>Через Apply Pay</label>
      </div>
      <div className="reservation_pay">
        <input type="radio" name="bank" />
        <label>Через Google Pay</label>
      </div>
      <div className="reservation_pay">
        <input type="radio" name="bank" />
        <label>Через PayPal</label>
      </div>
    </div>
  );
};
export default Reservation;
