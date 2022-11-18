/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import ToursInfoCard from "../ToursInfoCard/ToursInfoCard";
import "./ToursInfo.sass";
const ToursInfo = ({ tours }) => {
  return (
    <div className="ToursInfo">
      <div className="ToursInfo_container">
        <div className="ToursInfo_title">Популярные туры</div>
        <div className="ToursInfo_list">
          {Object.keys(tours).map((tour) => {
            return (
              <ToursInfoCard
                key={tours[tour]._id}
                title={tours[tour].title}
                image={tours[tour].image}
                tourmateImage={tours[tour].tourmateID?.image}
                torumateName={tours[tour].tourmateID?.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ToursInfo;
