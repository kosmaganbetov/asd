import "./Payment.sass";
const Payment = () => {
  return (
    <div className="payment">
      <div className="payment_title">
        <h2>Выберите способ оплаты</h2>
      </div>
      <div className="payment_country">
        <p>Выберите страну</p>
        <select placeholder="Select...">
          <option>Select...</option>
        </select>
      </div>
      <div className="payment_credit">
        <div className="payment_credit_card">
          <input type="radio" name="bank" />
          <label>Банковская карта</label>
        </div>
        <div className="payment_card_number">
          <p>Номер карты</p>
          <input placeholder="XXXX-XXXX-XXXX-XXX" type="number" />
        </div>
        <div className="payment_card">
          <div className="payment_card_date">
            <p>Срок действительности</p>
            <input placeholder="mm/yy" />
          </div>
          <div className="payment_card_date">
            <p>CVV</p>
            <input type={"password"} maxLength="3" placeholder="***" />
          </div>
        </div>
        <div className="payment_name">
          <p>Имя держателя</p>
          <input placeholder="Асан Үсенов" />
        </div>
        <div className="payment_save">
          <input type="checkbox" />
          <label>Сохранить карту</label>
        </div>
      </div>
      <div className="payment_pay">
        <input type="radio" name="bank" />
        <label>Через приложение Kaspi.kz</label>
      </div>
      <div className="payment_pay">
        <input type="radio" name="bank" />
        <label>Через Apply Pay</label>
      </div>
      <div className="payment_pay">
        <input type="radio" name="bank" />
        <label>Через Google Pay</label>
      </div>
      <div className="payment_pay">
        <input type="radio" name="bank" />
        <label>Через PayPal</label>
      </div>
    </div>
  );
};
export default Payment;
