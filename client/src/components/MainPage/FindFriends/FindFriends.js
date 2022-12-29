/* eslint-disable react/prop-types */
import { DatePicker, Select } from "antd";
import "./FindFriends.sass";
// eslint-disable-next-line react/prop-types
const FindFriends = ({ cities }) => {
  console.log(cities);
  return (
    <div className="FindFriends_container">
      <h1>Найди себе друга в любой точке мира</h1>
      <p>Бронируй тур, найди себе друга и познавай мир</p>
      <div className={"FindFriends_find_block"}>
        <form>
          {/* <select className="FindFriends_where"> */}
          <Select
            defaultValue="Куда едете?"
            className="FindFriends_where"
            size="large"
            options={[
              {
                value: "New-York",
                label: "New-York",
              },
            ]}
          />
          {/* <option>Куда едете?</option>
            {cities.map((city) => {
              return <option key={city._id}>{city.city}</option>;
            })} */}
          <DatePicker size="large" />
          <Select
            defaultValue="Куда едете?"
            className="FindFriends_qty"
            size="large"
            options={[
              {
                value: "New-York",
                label: "New-York",
              },
            ]}
          />
          {/* <select className="FindFriends_qty">
            <option>1 взрослый</option>
          </select> */}
          <button> Поиск</button>
        </form>
        <span>Ранее просмотренные</span>
      </div>
    </div>
  );
};

export default FindFriends;
