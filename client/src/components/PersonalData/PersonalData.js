import "./PersonalData.sass";

const PersonalData = () => {
  return (
    <div className="container">
      <div className="form_container">
        <div className="first_column">
          <label>
            <span>Фамилия</span>
            <input />
          </label>
          <label>
            <span>Имя</span>
            <input />
          </label>
          <label>
            <span>Дата рождения</span>
            <input placeholder="дд / месяц / гг" />
          </label>
          <div className="gender">
            <p className="gender_man">Мужчина</p>
            <p className="gender_woman">Женщина</p>
          </div>
          <label>
            <span>Номер телефона</span>
            <input />
          </label>
          <div className="buttons">
            <button className="button_save">Сохранить</button>
            <button className="button_next">Далее</button>
          </div>
        </div>
        <div className="second_column">
          <label>
            <span>Род деятельности</span>
            <select>
              <option>Наемный сотрудник</option>
            </select>
          </label>
          <label>
            <span>Образование</span>
            <select>
              <option>Бакалавриат</option>
            </select>
          </label>
          <label>
            <span>Языки</span>
            <select>
              <option>English, Türkçe, Қазақша</option>
            </select>
          </label>
          <div className="languages">
            <span>English</span>
            <span>Türkçe</span>
            <span>Қазақша</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalData;
